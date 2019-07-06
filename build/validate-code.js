const path = require('path');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const chalk = require('chalk');
const stylelint = require('stylelint');

const { CLIEngine } = require('eslint');

/**
 * FIXME 由于最新版本的 eslint 有 bug，故先把选项 fix: true 注释掉，但这样结果会显示已修复的规则数，但实际上是没有修复的
 * FIXME 如果不注释掉选项 fix: true，对于可以自动修复的规则，并没有修复，同时也不会打印本可以修复的规则数
 */
const eslintOption = {
  configFile: path.join(__dirname, '..', '.eslintrc.js'),
  ignorePath: path.join(__dirname, '..', '.eslintignore'),
};

// https://eslint.org/docs/developer-guide/nodejs-api#cliengine
const cli = new CLIEngine(eslintOption);
const rulesMap = cli.getRules();
const rules = [];
rulesMap.forEach((value, key) => {
  rules.push(key);
});

console.info(
  chalk.cyan('当前eslint的规则：\n'),
  chalk.cyan(JSON.stringify(rules, null, 2))
);

async function runEsLint() {
  // 标记是否通过检测
  const pass = 0;
  // --cached 表示暂存区，即执行 git add 后的文件
  const result = await exec(
    'git diff --cached --name-only | grep -e .js$ -e .vue$'
  ).catch(error => {
    if (error) {
      console.log(chalk.red('检测错误'));
    }
    console.log(chalk.green('\ngit 暂存区没有要提交的 js 文件'));
  });

  if (!result) {
    return Promise.resolve(0);
  }

  const { stdout, stderr } = result;

  if (stderr) {
    console.log(chalk.red(`exec stderr: ${stderr}`));
  }

  if (stdout.length) {
    const array = stdout.split('\n');
    array.pop();

    const cliResults = cli.executeOnFiles(array);
    const {
      results,
      errorCount,
      warningCount,
      fixableErrorCount,
      fixableWarningCount,
    } = cliResults;

    results.forEach(item => {
      const messages = item.messages.filter(it => {
        if (eslintOption.ignore) {
          return it.line !== undefined;
        }
        return true;
      });

      if (messages.length > 0) {
        console.log('\n');
        console.log(
          chalk.cyan('不符合 eslint 规则文件：'),
          chalk.cyan(item.filePath)
        );
        item.messages.forEach(obj => {
          if (obj.severity === 2) {
            // 错误
            console.log(
              chalk.red(
                `错误: 行${obj.line || 0}, 列${obj.column || 0}, 错误信息:  ${
                  obj.message
                }`
              ),
              chalk.redBright(` 错误规则：${obj.ruleId || '未知'}`)
            );
          } else if (obj.severity === 1) {
            // 警告
            console.log(
              chalk.yellow(
                `警告: 行${obj.line || 0}, 列${obj.column || 0}, 警告信息:  ${
                  obj.message
                }`
              ),
              chalk.yellow(` 警告规则：${obj.ruleId || '未知'}`)
            );
          }
        });
      }
    });

    if (warningCount > 0 || errorCount > 0) {
      console.log(
        chalk.red(
          `\n   ${errorCount +
            warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`
        )
      );
    }

    if (fixableErrorCount > 0 || fixableWarningCount > 0) {
      console.log(
        chalk.red(
          `\neslint 自动修复了 ${fixableErrorCount +
            fixableErrorCount} 个规则  (${fixableErrorCount} ${'errors'}, ${warningCount} warnings)`
        )
      );
    }
  }

  return Promise.resolve(pass);
}

async function runStyleLint() {
  // 标记是否通过检测
  let pass = 0;

  const result = await exec('git diff --cached --name-only| grep .scss$').catch(
    error => console.log(chalk.green('\ngit 暂存区没有要提交的 scss 文件'))
  );

  if (!result) {
    return Promise.resolve(0);
  }

  const { stdout, stderr } = result;

  if (stderr) {
    console.log(chalk.red(`exec stderr: ${stderr}`));
  }

  if (stdout.length) {
    const files = stdout.split('\n');
    files.pop();

    // https://stylelint.io/user-guide/node-api/
    return stylelint
      .lint({
        configFile: '.stylelintrc.yaml',
        files,
        fix: true,
      })
      .then(results => {
        let errorCount = 0;
        let warningCount = 0;
        JSON.parse(results.output).forEach(item => {
          if (item.warnings.length > 0) {
            console.log('\n');
            console.log(
              chalk.cyan(`不符合 stylelint 规则文件：${item.source}`)
            );
            item.warnings.forEach(obj => {
              warningCount += obj.severity === 'error' ? 0 : 1;
              errorCount += obj.severity === 'error' ? 1 : 0;

              console.log(
                chalk.red(
                  `错误或警告信息:  行${obj.line || 0}, 列${obj.column ||
                    0}, 错误信息:  ${obj.severity}  ${obj.text}`
                ),
                chalk.redBright(` 错误规则：${obj.rule || '未知'}`)
              );
              pass = 1;
            });
          }
        });
        if (warningCount > 0 || errorCount > 0) {
          console.log(
            chalk.red(
              `\n   ${errorCount +
                warningCount} problems (${errorCount} ${'errors'} ${warningCount} warnings)`
            )
          );
        }

        return Promise.resolve(pass);
      });
  }
}

async function runLint() {
  const pass1 = await runEsLint();
  const pass2 = await runStyleLint();
  return Promise.resolve(Number(pass1 || pass2));
}

runLint().then(pass => {
  if (pass) {
    process.exit(pass);
  }
});
