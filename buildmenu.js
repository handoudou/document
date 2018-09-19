var fs = require("fs");
var exec = require("child_process").exec;
var cmdStr = "tree -L 4 -N -J";
exec(cmdStr, function(err, stdout, stderr) {
  if (err) {
    console.log("get tree list error:" + stderr);
  } else {
    var data = JSON.parse(stdout);
    // 获取md字符串
    var pathArray = getPath(data[0].contents);
    // 写文件
    fs.writeFileSync("./SUMMARY.md", pathArray);
  }
});
// 需要忽略的文件
var ignoreName = [
  "README.md",
  "SUMMARY.md",
  "_book",
  "buildmenu.js",
  "buildmenu.sh",
  "assets",
  "work"
];

function getPath(dataArray, pathUrl = "", retract = "") {
  var pathMD = [];
  dataArray.forEach(item => {
    if (ignoreName.indexOf(item.name) < 0) {
      var mdStr = "";
      var path = "";
      var name = item.name || "";
      path = pathUrl + name;
      name = name.substring(0, name.lastIndexOf(".")) || name;
      if (item.type == "directory") {
        var mdStr = `
${retract}- [${name}]()`;
      } else {
        var mdStr = `
${retract}- [${name}](${path})`;
      }

      mdStr = mdStr;
      // 如果是文件夹执行下面操作
      if (item.type == "directory" && item.contents.length > 0) {
        var nameArray = getPath(item.contents, path + "/", retract + "    ");
        mdStr = mdStr + nameArray;
      }
      pathMD.push(mdStr);
    }
  });
  return pathMD.join("");
}
