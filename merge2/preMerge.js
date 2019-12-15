var fs = require("fs");
var pList = require("./pList");

let merge = fs.readFileSync("./template.js","utf8");
let str = `import util from "./util";\n`;
let COMP_LIST = pList.COMP_LIST;
const childProcess = require('child_process');
for (let i = 0; i < COMP_LIST.length; i++) {
  const it = COMP_LIST[i];
  str += `import ${it} from "./component/${it}/edit";\n`;
}
merge = merge.replace("// < -- 文件替换 -- >",str);
fs.writeFileSync("./merge.js",merge,"utf8");
p = childProcess.exec(
  'gulp default', // 执行的命令
  {},
  (err, stdout, stderr) => {
    if (err) {
      // err.code 是进程退出时的 exit code，非 0 都被认为错误
      // err.signal 是结束进程时发送给它的信号值
      console.log('err:', err, err.code, err.signal);
    }
    // console.log('stdout:', stdout);
    // console.log('stderr:', stderr);
  }
);