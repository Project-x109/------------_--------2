import profile from "../images/biography1.jpg";
import profile1 from "../images/biography2.jpg";
import profile2 from "../images/biography4.jpg";
import truemin from "../images/true.jpg";
import story from "../images/Stories.webp";
import Tim from "../images/Tim.png";
import icouldbetheone from "../images/icouldbetheone.jpg";
import Silhouettes from "../images/SilhouettesAvicii.jpg";
import levels from "../images/levels.webp";
import myfeeling from "../images/myfeeling.jpg";
import myfeeling1 from "../images/tub.jpg";

export const profiles = [
  {
    image: profile,
    title: "Tim Bergling",
    description:
      "known professionally as Avicii , was a Swedish DJ, remixer, and music producer. At age 16, Bergling began posting his remixes on electronic music forums, which led to his first record deal",
    description2:
      "He rose to prominence in 2011 with his single 'Levels'. His debut studio album, True (2013), blended electronic music with elements of multiple genres and received generally positive reviews",
    description3:
      "It peaked in the top 10 in more than 15 countries and topped international charts;the lead single, 'Wake Me Up', topped most music markets in Europe and reached number four in the United States.",
  },
  {
    image: profile1,
    title: "Avicii",
    description:
      "Tim Bergling was born in Stockholm on 8 September 1989,the son of Klas Bergling, who ran an office supply business, and actress Anki Lidén.He had three siblings: David Bergling, Linda Sterner, and actor Anton Körberg. He started mixing in his bedroom at the age of eight",
    description2:
      "Inspired by his brother, who was also a DJ, he began making music at the age of 16, teaching himself to use a pirated copy of FL Studio.",
    description3:
      "In May 2007, Bergling signed on with the Dejfitts Plays label.He was a member of the Laidback Luke Forums, where he refined his craft and, at times, demonstrated his distinct deep house style.",
  },
  {
    image: profile2,
    title: "Avicii",
    description:
      "By 2009 to 2010, Bergling was a prolific producer and was releasing music incredibly quickly. His remixes during this period were 'Sound of Now', 'Muja', 'Ryu' and 'Even'. Bergling explained that the name Avicii means 'the lowest level of Buddhist hell'",
    description2:
      "and he chose the moniker because his real name was already used upon creating his Myspace page.Then, in 2010, Bergling released the hit song 'Seek Bromance', which reached the top 20 in several countries",
  },
];

export const musics = [
  {
    AlbumTitle: "True",
    type: "album",
    ReleaseDate: "2013-09-13",
    Description:
      "Avicii's debut album, featuring the hit singles 'Wake Me Up', 'You Make Me Feel' and 'Hey Brother'.",
    image: truemin,
  },
  {
    AlbumTitle: "Stories",
    type: "album",
    ReleaseDate: "2015-10-02",
    Description:
      "Avicii's second album, featuring the hit singles 'Waiting for Love', 'The Nights' and 'Broken Arrows'.",
    image: story,
  },

  {
    AlbumTitle: "Tim",
    type: "album",
    ReleaseDate: "2019-06-06",
    Description:
      "Avicii's posthumous album, featuring the hit singles 'SOS', 'Heaven' and 'Tough Love'.",
    image: Tim,
  },
  {
    AlbumTitle: "I Could Be the One",
    type: "single",
    ReleaseDate: "2012-02-20",
    Description: "Avicii's breakthrough single, featuring Nicky Romero.",
    image: icouldbetheone,
  },
  {
    AlbumTitle: "Silhouettes",
    type: "single",
    ReleaseDate: "2012-08-10",
    Description: "Avicii's second single, featuring Salem Al Fakir.",
    image: Silhouettes,
  },
  {
    AlbumTitle: "Levels",
    type: "single",
    ReleaseDate: 2011 - 10 - 10,
    Description:
      "Avicii's signature single, which launched him into international stardom.",
    image: levels,
  },
  {
    AlbumTitle: "My Feelings for You",
    type: "single",
    ReleaseDate: 2010 - 10 - 16,
    Description: "Avicii's debut single, featuring Sebastien Drums.",
    image: myfeeling,
  },
];

export const video = [
  {
    title: "Waiting for Love",
    url: "https://www.youtube.com/embed/cHHLHGNpCSA?si=y7ZUCUYvg8-A7zpP",
    thumbnail: myfeeling1,
  },
  {
    title: "Wake Me Up",
    url: "https://www.youtube.com/embed/IcrbM1l_BoI?si=vzjX7AYSQoUW1NTZ",
    thumbnail: myfeeling1,
  },
];
