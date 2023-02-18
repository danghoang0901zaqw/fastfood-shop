// all images imported from images directory
import burger_01 from "../images/hamburger_01.png";
import burger_02 from "../images/hamburger_02.png";
import burger_03 from "../images/hamburger_03.png";
import burger_04 from "../images/hamburger_04.png";
import burger_05 from "../images/hamburger_05.jpeg";
import burger_06 from "../images/hamburger_06.jpeg";
import burger_07 from "../images/hamburger_07.jpg";
import burger_08 from "../images/hamburger_08.jpg";
import burger_09 from "../images/hamburger_09.jpg";
import burger_10 from "../images/hamburger_10.jpg";
import burger_11 from "../images/hamburger_11.jpg";
import burger_12 from "../images/hamburger_12.jpg";

import hotdog_01 from "../images/hotdog_01.jpeg";
import hotdog_02 from "../images/hotdog_02.jpeg";
import hotdog_03 from "../images/hotdog_03.jpeg";
import hotdog_04 from "../images/hotdog_04.jpeg";
import hotdog_05 from "../images/hotdog_05.jpeg";
import hotdog_06 from "../images/hotdog_06.jpeg";
import hotdog_07 from "../images/hotdog_07.jpeg";
import hotdog_08 from "../images/hotdog_08.jpeg";

import bread_01 from "../images/bread_01.jpeg";
import bread_02 from "../images/bread_02.jpeg";
import bread_03 from "../images/bread_03.jpeg";
import bread_04 from "../images/bread_04.jpeg";
import bread_05 from "../images/bread_05.jpeg";
import bread_06 from "../images/bread_06.jpeg";
import bread_07 from "../images/bread_07.jpeg";
import bread_08 from "../images/bread_08.jpeg";
import bread_09 from "../images/bread_09.jpeg";
import bread_10 from "../images/bread_10.jpeg";

import pizza_01 from "../images/pizza_01.jpeg";
import pizza_02 from "../images/pizza_02.jpeg";
import pizza_03 from "../images/pizza_03.jpeg";
import pizza_04 from "../images/pizza_04.jpeg";
import pizza_05 from "../images/pizza_05.jpeg";
import pizza_06 from "../images/pizza_06.jpeg";
import pizza_07 from "../images/pizza_07.jpeg";
import pizza_08 from "../images/pizza_08.jpeg";
import pizza_09 from "../images/pizza_09.jpeg";
import pizza_10 from "../images/pizza_10.jpeg";
import pizza_11 from "../images/pizza_11.jpg";
import pizza_12 from "../images/pizza_12.jpg";
import pizza_13 from "../images/pizza_13.jpg";
import pizza_14 from "../images/pizza_14.jpg";
import pizza_15 from "../images/pizza_15.jpg";
import pizza_16 from "../images/pizza_16.jpg";
import pizza_17 from "../images/pizza_17.jpg";
import pizza_18 from "../images/pizza_18.jpg";
import pizza_19 from "../images/pizza_19.png";
import pizza_20 from "../images/pizza_20.png";

import sandwich_01 from "../images/sandwich_01.jpeg";
import sandwich_02 from "../images/sandwich_02.jpeg";
import sandwich_03 from "../images/sandwich_03.jpeg";
import sandwich_04 from "../images/sandwich_04.jpeg";
import sandwich_05 from "../images/sandwich_05.jpeg";
import sandwich_06 from "../images/sandwich_06.jpeg";
import sandwich_07 from "../images/sandwich_07.jpeg";
import sandwich_08 from "../images/sandwich_08.jpeg";
import sandwich_09 from "../images/sandwich_09.jpeg";
import sandwich_10 from "../images/sandwich_10.jpeg";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 24.0,
    category: "burger",
    image01: burger_02,
    image02: burger_01,
    image03: burger_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "white", "blue", "green", "yellow"],
    description:
      "Thịt bò xay ướp sẵn & định hình thành miếng burger patty vừa ăn. Từ 3 miếng nay thành 4 miếng - Vừa ngon miệng lại vừa tiết kiệm. Sản phẩm an toàn & tiện lợi vì được đóng gói trong vỉ (hút chân không, với 2 lớp màng bảo vệ) và được bảo quản mát ở nhiệt độ từ 0-4 độ C. Chỉ cần mở bao bì là chế biến ngay. Hướng dẫn: Chiên áp chảo từng mặt hamburger đến khi vàng đều là đã ra miếng burger thơm phức. Ăn kèm với với bánh mì tròn burger (hoặc bánh mì sandwich), thêm mayonnaise, salad, cà chua, phô mai lát, tương ớt & tương cà.",

    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "02",
    title: "Vegetarian Pizza ",
    price: 115.0,
    category: "pizza",
    image01: pizza_01,
    image02: pizza_10,
    image03: pizza_12,
    size: ["s", "m", "l"],
    colors: ["black", "yellow", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "03",
    title: "Double Cheese Margherita",
    price: 110.0,
    category: "pizza",
    image01: pizza_12,
    image02: pizza_02,
    image03: pizza_05,
    size: ["l", "xl"],
    colors: ["black", "white"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "04",
    title: "Maxican Green Wave",
    price: 36.0,
    category: "pizza",
    image01: pizza_04,
    image02: pizza_17,
    image03: pizza_19,
    size: ["xl", "2xl"],
    colors: ["black", "yellow"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "05",
    title: "Cheese Burger",
    price: 85.0,
    category: "burger",
    image01: burger_05,
    image02: burger_09,
    image03: burger_11,
    size: ["s"],
    colors: ["pink", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "06",
    title: "Royal Cheese Burger",
    price: 65.0,
    category: "burger",
    image01: burger_07,
    image02: burger_12,
    image03: burger_08,
    size: ["xl"],
    colors: ["black", "blue", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "07",
    title: "Seafood Pizza",
    price: 115.0,
    category: "pizza",
    image01: pizza_03,
    image02: pizza_06,
    image03: pizza_18,
    size: ["s", "m", "2xl"],
    colors: ["yellow", "pink"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "08",
    title: "Thin Cheese Pizza",
    price: 293.0,
    category: "pizza",
    image01: pizza_04,
    image02: pizza_09,
    image03: pizza_13,
    size: ["s", "2xl"],
    colors: ["green"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "09",
    title: "Pizza With Mushroom",
    price: 15.0,
    category: "pizza",
    image01: pizza_15,
    image02: pizza_18,
    image03: pizza_11,
    size: ["m", "l"],
    colors: ["black"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "10",
    title: "Classic Hamburger",
    price: 70.0,
    category: "burger",
    image01: burger_03,
    image02: burger_04,
    image03: burger_10,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "11",
    title: "Crunchy Bread",
    price: 83.0,
    category: "bread",
    image01: bread_01,
    image02: bread_02,
    image03: bread_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "12",
    title: "Delicious Bread ",
    price: 99.0,
    category: "bread",
    image01: bread_04,
    image02: bread_05,
    image03: bread_06,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "pink", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },

  {
    id: "13",
    title: "Loaf Bread ",
    price: 10.0,
    category: "bread",
    image01: bread_07,
    image02: bread_08,
    image03: bread_09,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "14",
    title: "Banana Bread",
    price: 7.0,
    category: "bread",
    image01: bread_10,
    image02: bread_02,
    image03: burger_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue", "green", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "15",
    title: "Baguette Bread ",
    price: 21.0,
    category: "bread",
    image01: bread_03,
    image02: bread_07,
    image03: bread_06,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "yellow", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "16",
    title: "Breadstick Bread ",
    price: 35.0,
    category: "bread",
    image01: bread_08,
    image02: bread_04,
    image03: bread_06,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["green", "yellow", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "17",
    title: "Brioche Bread ",
    price: 44.0,
    category: "bread",
    image01: bread_09,
    image02: bread_05,
    image03: bread_01,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "18",
    title: "Hot Dog Michigan",
    price: 8.0,
    category: "hot-dog",
    image01: hotdog_01,
    image02: hotdog_02,
    image03: hotdog_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue", "yellow"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "19",
    title: "Hot Dog Italian ",
    price: 12.0,
    category: "hot-dog",
    image01: hotdog_04,
    image02: hotdog_05,
    image03: hotdog_06,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "green", "yellow", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "20",
    title: "Hot Dog Michigan",
    price: 29.0,
    category: "hot-dog",
    image01: hotdog_07,
    image02: hotdog_08,
    image03: hotdog_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "green", "pink", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "21",
    title: "The Sumo Dog",
    price: 47.0,
    category: "hot-dog",
    image01: hotdog_06,
    image02: hotdog_02,
    image03: hotdog_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "22",
    title: "Mac & Cheese Dog",
    price: 56.0,
    category: "hot-dog",
    image01: hotdog_03,
    image02: hotdog_07,
    image03: hotdog_06,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "23",
    title: "Stacked Dogs Stand  ",
    price: 23.0,
    category: "hot-dog",
    image01: hotdog_05,
    image02: hotdog_01,
    image03: hotdog_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "24",
    title: "Revolver Hot Dog Lounge ",
    price: 64.0,
    category: "hot-dog",
    image01: hotdog_06,
    image02: hotdog_08,
    image03: hotdog_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "yellow"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "25",
    title: "Mmm Mmm Good Dogs",
    price: 92.0,
    category: "hot-dog",
    image01: hotdog_07,
    image02: hotdog_02,
    image03: hotdog_05,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue", "green"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "26",
    title: "Dressed Up Hot Dog",
    price: 18.0,
    category: "hot-dog",
    image01: hotdog_02,
    image02: hotdog_08,
    image03: hotdog_01,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "blue", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "27",
    title: "The Sausage Fest",
    price: 33.0,
    category: "hot-dog",
    image01: hotdog_06,
    image02: hotdog_02,
    image03: hotdog_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue", "green", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "28",
    title: "The Disgruntled Wiener",
    price: 67.0,
    category: "hot-dog",
    image01: hotdog_04,
    image02: hotdog_06,
    image03: hotdog_01,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "29",
    title: "Chicken Sandwich",
    price: 84.0,
    category: "sandwich",
    image01: sandwich_01,
    image02: sandwich_02,
    image03: sandwich_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "30",
    title: "Cheese Burger",
    price: 42.0,
    category: "burger",
    image01: burger_06,
    image02: burger_09,
    image03: burger_11,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue", "green"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "31",
    title: "Egg Sandwich",
    price: 75.0,
    category: "sandwich",
    image01: sandwich_05,
    image02: sandwich_02,
    image03: sandwich_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "32",
    title: "Seafood Sandwich",
    price: 41.0,
    category: "sandwich",
    image01: sandwich_04,
    image02: sandwich_08,
    image03: sandwich_10,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["green", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "33",
    title: "Roast Beef Sandwich",
    price: 35.0,
    category: "sandwich",
    image01: sandwich_10,
    image02: sandwich_07,
    image03: sandwich_02,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "white", "blue", "green"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "34",
    title: "Grilled Cheese",
    price: 24.0,
    category: "sandwich",
    image01: sandwich_09,
    image02: sandwich_03,
    image03: sandwich_07,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "pink", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "35",
    title: "Ham Sandwich",
    price: 135.0,
    category: "sandwich",
    image01: sandwich_06,
    image02: sandwich_05,
    image03: sandwich_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "white", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "36",
    title: " Nutella Sandwich",
    price: 160.0,
    category: "sandwich",
    image01: sandwich_03,
    image02: sandwich_04,
    image03: sandwich_05,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "blue", "green", "yellow", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "37",
    title: "Grilled Chicken Sandwich",
    price: 199.0,
    category: "sandwich",
    image01: sandwich_10,
    image02: sandwich_02,
    image03: sandwich_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "38",
    title: " Meatball Sandwich",
    price: 150.0,
    category: "sandwich",
    image01: sandwich_06,
    image02: sandwich_08,
    image03: sandwich_10,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "green", "yellow"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "39",
    title: "Ice Cream Sandwich",
    price: 127.0,
    category: "sandwich",
    image01: sandwich_05,
    image02: sandwich_07,
    image03: sandwich_09,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "40",
    title: "Prawn Sandwich",
    price: 147.0,
    category: "sandwich",
    image01: sandwich_02,
    image02: sandwich_03,
    image03: sandwich_04,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["yellow", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "42",
    title: "Pizza Rustica",
    price: 14.0,
    category: "pizza",
    image01: pizza_16,
    image02: pizza_05,
    image03: pizza_12,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "white", "yellow", "pink", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "43",
    title: "California Pizza",
    price: 28.0,
    category: "pizza",
    image01: pizza_14,
    image02: pizza_09,
    image03: pizza_17,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "44",
    title: "Sicilian Pizza",
    price: 13.0,
    category: "pizza",
    image01: pizza_08,
    image02: pizza_15,
    image03: pizza_03,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "45",
    title: "Greek Pizza",
    price: 127.0,
    category: "pizza",
    image01: pizza_07,
    image02: pizza_11,
    image03: pizza_02,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["blue", "green"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "46 ",
    title: "Neapolitan Pizza",
    price: 78.0,
    category: "pizza",
    image01: pizza_10,
    image02: pizza_14,
    image03: pizza_12,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "47 ",
    title: "Detroit Pizza",
    price: 95.0,
    category: "pizza",
    image01: pizza_20,
    image02: pizza_17,
    image03: pizza_02,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["yellow"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "49",
    title: "Fisherman's Burger",
    price: 65.0,
    category: "burger",
    image01: burger_04,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: [
      "black",
      "white",
      "blue",
      "green",
      "yellow",
      "pink",
      "red",
      "orange",
    ],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "50",
    title: "Wacky Burger",
    price: 65.0,
    category: "burger",
    image01: burger_08,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["red", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "51",
    title: "Burger Supernova",
    price: 65.0,
    category: "burger",
    image01: burger_09,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "yellow", "pink"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "52",
    title: "Sassy Burger",
    price: 65.0,
    category: "burger",
    image01: burger_10,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["white", "blue", "green", "pink"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "53",
    title: "Burger Awakening",
    price: 65.0,
    category: "burger",
    image01: burger_11,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["pink", "red"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
  {
    id: "54",
    title: "Chicha Burger",
    price: 65.0,
    category: "burger",
    image01: burger_12,
    image02: burger_12,
    image03: burger_08,
    size: ["s", "m", "l", "xl", "2xl"],
    colors: ["black", "pink", "orange"],
    description: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    review: [
      {
        id: 1,
        name: "Cristiano Ronaldo",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROTPM0i2WbN4qAh5P03t59YvEfgKAPpYXL1A&usqp=CAU",
        content:
          "Mesut Ozil đã có mặt để cứu trợ những nạn nhân trong vụ động đất vừa qua.",
      },
      {
        id: 2,
        nanme: "Lionel Messi",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyyUgyA_pLzti7wGdb52gVTi3TWYDqW9T6LA&usqp=CAU",
        content:
          "Không lâu sau khi tin đồn về việc Vinicius Jr có thể rời Real Madrid trong tương lai vì nạn phân biệt chủng tộc hướng đến cậu ngày càng nhiều rộ lên, đích thân cậu đã lập tức thay đổi ảnh đại diện trên Twitter với hình ảnh bản thân đang chỉ tay vào logo của Real Madrid.",
      },
      {
        id: 3,
        name: "Neymar Jr",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZIjQl1vXGqpH9z-6rKFBiMsAoHnfIm-4q-A&usqp=CAU",
        content:
          "CLB sợ cầu thủ người Brazil sẽ mất kiên nhẫn trước nạn phân biệt chủng tộc và thù ghét nhắm vào cậu trong từng trận đấu, đặc biệt là trên sân khách một cách quá thường xuyên, điển hình là trận đấu vừa rồi trước Mallorca. Bên cạnh phân biệt chủng tộc là còn là sự tấn công tinh thần từ truyền thông bẩn và các đối thủ trên sân.",
      },
      {
        id: 4,
        name: "Gareth Bale",
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ5svoVCy2lettjphOjdrfl_Pc6OHTx1eOfA&usqp=CAU",
        content:
          "Supersports với tinh thần thể thao không giới hạn sẽ luôn ủng hộ và đồng hành cùng bạn trên hành trình thay đổi bản thân trong năm mới nhé!",
      },
    ],
  },
];

const getAllProducts = () => products;
const getProducts = (specifiedProduct,count) => {
  const max = specifiedProduct.length - count;
  const min = 0;
  const start = Math.floor(Math.random() * (max - min) + min);
  return products.slice(start, start + count);
};
const productData = {
  getAllProducts,
  getProducts,
};

export default productData;
