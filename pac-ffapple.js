var domains = {
    "ocsp.apple.com":1,
    "gdmf.apple.com":1,
    "mesu.apple.com":1,
    "swscan.apple.com":1,
    "appldnld.apple.com":1,
    "world-gen.g.aaplimg.com":1
};
 
var proxy = "SOCKS5 127.0.0.1:1080; SOCKS 127.0.0.1:1080;";
 
var direct = 'DIRECT;';
 
function FindProxyForURL(url, host) {
    var lastPos;
    do {
        if (domains.hasOwnProperty(host)) {
            return proxy;
        }
        lastPos = host.indexOf('.') + 1;
        host = host.slice(lastPos);
    } while (lastPos >= 1);
    return direct;
}