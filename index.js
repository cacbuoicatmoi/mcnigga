const mineflayer = require('mineflayer');

function createBot() {
  const bot = mineflayer.createBot({
    host: 'mc.example.com', // 🔧 Thay bằng IP server bạn muốn AFK
    port: 25565, // Mặc định là 25565, có thể đổi nếu server khác
    username: 'BotTen123' // 🔧 Tên tài khoản Minecraft (dùng tài khoản crack nếu cần)
  });

  bot.on('spawn', () => {
    console.log('✅ Bot đã vào server!');
    // Quay đầu chống AFK kick
    setInterval(() => {
      bot.look(Math.random() * Math.PI * 2, 0);
    }, 10000);
  });

  bot.on('end', () => {
    console.log('⚠️ Bot bị kick, thử kết nối lại...');
    setTimeout(createBot, 10000); // Tự động kết nối lại sau 10s
  });
}

createBot();
