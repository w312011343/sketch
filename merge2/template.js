// < -- 文件替换 -- >
let arr = [];
arr.push(Button(),List());
for (let i = 0; i < arr.length; i++) {
  const it = arr[i];
  util.getElementById("ul").append(`<li>${JSON.stringify(it)}</li>`);
}