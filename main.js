function generateEmail() {
    // 宛先と本文を取得
    var recipient = document.getElementById("recipient").value;
    var count = document.getElementById("count").value;
    var sender1 = document.getElementById("sender1").value;
    var sender2 = document.getElementById("sender2").value;
    var message = document.getElementById("message").value;

    // 文字列分割
    recipient = recipient.replace( "+", "\n" );
    recipient = recipient.replace( "＋", "\n" );

    // メール文面を生成
    var emailContent = recipient + "様\n\n" + count + "\n" + sender1 + "の" + sender2 + "と申します。\nご連絡ありがとうございます。\n\n" + message;

    // テキストエリアに表示
    document.getElementById("emailContent").value = emailContent;
}