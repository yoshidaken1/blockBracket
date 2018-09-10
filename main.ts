//% weight=70 icon="\uf1eb" color=#FFA000 block="ESP8266 Wifi"
namespace esp8266 {
    let flag = true;

    // -------------- 1. Initialization ----------------
    //%blockId=esp8266_initialize_wifi
    //%block="Initialize WiFi"
    //% weight=90	
    //% blockGap=7	
    export function initializeWifi(): void {
        //serial.redirect(SerialPin.P16, SerialPin.P8, BaudRate.BaudRate115200);
        serial.redirect(SerialPin.P1, SerialPin.P2, BaudRate.BaudRate115200);
    }

    // -------------- 2. WiFi ----------------
    //% blockId=muselab_set_wifi
    //% block="Set wifi to ssid %ssid| pwd %pwd"   
    //% weight=80		
    //% blockGap=7	
    export function setWifi(ssid: string, pwd: string): void {
        //serial.writeLine("(AT+wifi?ssid=" + ssid + "&pwd=" + pwd + ")");
        serial.writeLine('AT+CWJAP="' + ssid + '","' + pwd + '"');
    }



}