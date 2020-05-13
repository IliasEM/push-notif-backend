module.exports = {
    //i used mlab database for fast and realiable pace development enviroment
    mongoURI: 'mongodb+srv://iliasadmin:EA43tWcxbblpTIBo@web-push-orkuv.mongodb.net/test?retryWrites=true&w=majority       ',
    privateKey: 'AIP-tQxbUn_roxnSZ-v_QnDyVQY1XUIjSueT4E1tqf0' || process.env.VAPID_PRIVATE_KEY,
    publicKey: 'BO71sa1qX-lLgW_ay5SpkPy_KzObd6zOUBvZ6nEvj1K0c2OfWkTKo8BGfEl6157xYzC0FgUlwwV774ipJ_qCxBE' || process.env.VAPID_PUBLIC_KEY
}