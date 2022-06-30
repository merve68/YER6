export const product = [
    {
        id: 1,
        name: "Körlük",
        thumbnail: require("../assets/images/series/barbarians/barbarians_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/1.jpg")
            },
            
        ],
        details: {
            image: require("../assets/images/series/barbarians/barbarians.jpg"),
            age: "16+",
            genre: " Drama",
            ratings: 7.2,
            price:100,
            currentEpisode: 'Körlük, Nobel Edebiyat Ödüllü Portekizli yazar José Saramagonun 1995te yazdığı alegori, bilimkurgu ve psikolojik bir romandır. 1998 Nobel Edebiyat Ödülü sahibi olan Jose Saramago nun en ünlü romanlarından birisidir.',
          
            progress: "0%"
        }
    },
    {
        id: 2,
        name: "Yüzüklerin Efendisi",
        thumbnail: require("../assets/images/series/bridgerton/bridgerton_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/6.jpg")
            },
            
        ],
        details: {
            image: require("../assets/images/series/bridgerton/bridgerton.jpg"),
            age: "18+",
            genre: "Fantastik",
            ratings: 7.3,
            price:100,
            currentEpisode: 'Yüzüklerin Efendisi, İngiliz filolojist ve Oxford Üniversitesi profesörü J. R. R. Tolkienin yazdığı epik fantezi türündeki romandır. Hikâye, Tolkienin çocuklar için yazdığı 1937 tarihli Hobbitin devamı olarak başlamıştı ancak sonunda ondan çok daha büyük bir eser haline geldi.',
          
        }
    },
    {
        id: 3,
        name: "Uçurtma Acısı",
        thumbnail: require("../assets/images/series/money_heist/money_heist_cover.jpg"),
        stillWatching: [],
        details: {
            image: require("../assets/images/series/money_heist/money_heist.jpg"),
            age: "16+",
            genre: "Dram",
            ratings: 8.3,
           
            currentEpisode: "Uçurtma Avcısı, Afganistan doğumlu Amerikalı yazar Khaled Hosseini'nin ilk romanıdır. Kitapta dostluk, arkadaşlık, sevgi, ihanet, barış temalarına değinilmiştir. 2003 yılında yayımlanan kitap, bir Afgan tarafından İngilizce yazılmış ilk romandır. ",
           
        }
    },
    {
        id: 4,
        name: "Martin Eden",
        thumbnail: require("../assets/images/series/salvation/salvation_cover.jpg"),
        stillWatching: [
            {
                id: 1,
                profile: require("../assets/images/dummy_profile/1.jpg")
            },
            
        ],
        details: {
            image: require("../assets/images/series/salvation/salvation.jpg"),
            age: "13+",
            genre: "Sosyoloji",
            ratings: 7.0,
            price:100,
            currentEpisode: "Martin Eden, 1909'da Amerikalı yazar Jack London tarafından yazılan ve yazar olmanın mücadelesini veren genç işçi Martin Eden'i konu edinen romandır. Kitabın yazarı olan London'ın aksine protagonist Eden, sosyalizmi köle ahlakı olarak niteleyerek reddetmekte ve onun yerine Nietzsche'nin bireyciliğine inanmaktadır. ",
       
        }
    },
]


const dummyData = { product };

export default dummyData;

export function getProduct(){
    return product;
}

export function getProducts(id){
    return product.find((product) => product.id == id);
}