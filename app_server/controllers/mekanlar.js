var express = require("express");
const { isValidObjectId } = require("mongoose");
var router = express.Router();

const anaSayfa = function (req, res, next) {
  res.render("mekanlar-liste", {
    baslik: "Anasayfa",
    sayfaBaslik: {
      siteAd: "Mekan32",
      aciklama: "Isparta civarındaki mekanları keşfedin!",
    },
    footer:"Muaz Erdem YİĞİT",
    mekanlar: [{
        ad: "Starbucks",
        adres: "Centrum Garden",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "10km",
      },
      {
        ad: "Gloria Jeans",
        adres: "Iyaş Avm",
        puan: "2",
        imkanlar: ["kahve", "kek", "çay"],
        mesafe: "5km",
      },
      {
        ad: "Mackbear",
        adres: "Centrum Garden Arkası",
        puan: "4",
        imkanlar: ["kahve", "su", "pasta"],
        mesafe: "4km",
      },
      {
        ad: "Simit Sarayı",
        adres: "Centrum Garden İçi",
        puan: "2",
        imkanlar: ["kahve", "çay", "simit"],
        mesafe: "1km",
      },
      {
        ad: "Valencia Cafe",
        adres: "Centrum Garden Yanı",
        puan: "3",
        imkanlar: ["kahve", "çay", "pasta"],
        mesafe: "11km",
      },
    ]
  });
};
const mekanBilgisi = function (req, res, next) {
  res.render('mekan-detay', {
    baslik: "Mekan Bilgisi",
    sayfaBaslik: "Starbucks",
    footer:"Muaz Erdem YİĞİT",
    mekanBilgisi: {
      ad: "Starbucks",
      adres: "Centrum Garden",
      puan: "3",
      imkanlar: ["kahve", "çay", "pasta"],
      koordinatlar: {
        enlem: 37.781885,
        boylam: 30.566034,
      },
      saatler: [{
          gunler: "Pazartesi-Cuma",
          acilis: "7:00",
          kapanis: "23:00",
          kapali: false,
        },
        {
          gunler: "Cumartesi",
          acilis: "9:00",
          kapanis: "22:30",
          kapali: false,
        },
        {
          gunler: "Pazar",
          kapali: true,
        },
      ],
      yorumlar: [{
        yorumYapan: "Muaz Erdem YİĞİT",
        puan: "3",
        tarih: "18 Ekim 2021",
        yorumMetni: "Kahveler çok güzel",
      }, ],
    },
  });
}
const yorumEkle = function (req, res, next) {
  res.render('yorum-ekle', {
    title: 'Yorum Ekle'
  });
}

module.exports = {
  anaSayfa,
  mekanBilgisi,
  yorumEkle
}
