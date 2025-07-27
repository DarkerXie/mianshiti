// 获取文件输入框、文件名显示区域
const fileInput = document.getElementById('fileInput');
const fileNameDisplay = document.getElementById('fileName');

// 监听文件选择事件
fileInput.addEventListener('change', function (e) {
  const file = e.target.files[0];
  if (file) {
    // 显示已选文件名
    fileNameDisplay.textContent = `Selected file: ${file.name}`;
  } else {
    // 未选择文件时清空
    fileNameDisplay.textContent = '';
  }
});

// 可选：如果需要实现“跳过”逻辑，可给“Last step”按钮绑定事件
const lastStepBtn = document.querySelector('.btn-last');
lastStepBtn.addEventListener('click', function () {
  // 这里可写“上一步”的逻辑，比如页面跳转、步骤回退等
  alert('Going to last step...');
});

// 可选：“Finish”按钮逻辑，可根据实际需求发送文件到服务器等
const finishBtn = document.querySelector('.btn-finish');
finishBtn.addEventListener('click', function () {
  if (fileInput.files.length > 0) {
    const file = fileInput.files[0];
    // 这里可写文件上传逻辑（示例：仅提示）
    alert(`Uploading ${file.name}...`);
  } else {
    alert('No file selected.');
  }
});  