var VK = require("VK-Promise"),
    vk = new VK("176d25e1218aabbaaf3382db365375ddddfb14952e16d73d23ad082bb65462b0b48f4e0a0771a2c0a3dd1");
vk.longpoll.start();
vk.on("message", function (event, msg) {
    if(msg.body == '$гейдуков'){
        msg.sendAttachment("photo479523394_456239093")
        msg.send("[st.castro|лысый обезьян], ебу тя лысиной) >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$касимовский песик'){
        msg.sendAttachment("photo479523394_456239094")
        msg.send("[st.castro|песик-переросток], ты вкурсе что твою мамашу ебет пол касимова? >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$лысина'){
        msg.sendAttachment("photo479523394_456239095")
        msg.send("[st.castro|черно-белый довбоеб], я ебал твою мамашу и мне похуй >(( ")
        msg.setActivity();
        peer_id();
    }
    if(msg.body == '$быдлан'){
        msg.sendAttachment("photo479523394_456239096")
        msg.send("[st.castro|гнида], войми, твоя мамаша-шлюха делает невъебический минет >(( ")
        msg.setActivity();
    }
});