var str_telop="";
var str_date="";

function doGet(e){
  const htmlOut = HtmlService.createTemplateFromFile("weatherCal").evaluate();
  htmlOut
        .setTitle('読み上げ日めくりカレンダー');
    //    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
  return htmlOut;

}


function myWeatherFunction() {

// アクセス先
var url = "http://weather.livedoor.com/forecast/webservice/json/v1?city=130010"
// POSTリクエスト
var response = UrlFetchApp.fetch(url);
// HTML結果を取得（引数のcharsetは設定したほうが良い）
var content = response.getContentText("UTF-8");
  
  var data = JSON.parse(content);
  console.log(data.location);
  console.log(data.forecasts[0].telop);
  console.log(data.forecasts[0].date);
  
  str_telop = data.forecasts[0].telop;
  str_date = data.forecasts[0].date;  
}




/*
function myFunction() {
  // POSTデータ
var payload = {
  "user_id" : "userid",
  "password" : "pass",
  "submit" : "ログイン"
};
// POSTオプション
var options = {
  "method" : "POST",
  "payload" : payload
};

// アクセス先
var url = "https://script.google.com/macros/s/AKfycbwRMBqFmmgeTJTaRt1XBCXisY97b1gKnGl74c25VyBvz-oYw5E/exec"
// POSTリクエスト
var response = UrlFetchApp.fetch(url, options);
// HTML結果を取得（引数のcharsetは設定したほうが良い）
var content = response.getContentText("UTF-8");
  
}
*/
