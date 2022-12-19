import { View, Text, TextInput, ScrollView, Image } from "react-native";
import React from "react";
import styles from "../styles/homeScreen-styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Footer from "../constant/Footer/Footer";
export default function HomeScreen(props) {
  const { navigation, route } = props;
  const dataLogo = [
    { id: "1", catagory: "Phổ biến", logo: "star" },
    { id: "2", catagory: "Sofa", logo: "sofa" },
    { id: "3", catagory: "Bàn làm việc", logo: "table-furniture" },
    { id: "4", catagory: "Đèn", logo: "desk-lamp" },
    { id: "5", catagory: "Đồng hồ", logo: "clock" },
    { id: "6", catagory: "Tủ âm tường", logo: "file-cabinet" },
  ];

  const renderLogo = () => {
    return dataLogo.map((item, index) => {
      return (
        <View key={item.id} style={styles.logoGroupHeader}>
          <Icon name={item.logo} style={styles.logoHeader} />
          <Text style={styles.logoName}>{item.catagory}</Text>
        </View>
      );
    });
  };

  const dataProduct = [
    {
      id: "1",
      name: "Sofa 3 chỗ Osaka mẫu 1 vải 29",
      price: "2890000",
      uri: "https://nhaxinh.com/wp-content/uploads/2021/10/sofa-osaka-3-cho-3101896-1-768x454.jpg",
      description:
        "Sofa 3 chỗ từ bộ sưu tập Osaka mang nét hiện đại và thơ mộng của Nhật Bản, tạo nên một không gian sống độc đáo đầy sang trọng. Sản phẩm có phần chân bằng inox màu gold chắc chắn, phần nệm được bọc vải và có thể tháo rời được. Sofa 3 chỗ Osaka mẫu 1 vải 29 không chỉ mang đến thiết kế tinh tế, sang trọng mà còn cho người ngồi cảm giác thoải mái, dễ chịu.",
    },
    {
      id: "2",
      name: "Sofa Maxine 3 chỗ hiện đại da Cognac",
      price: "4801000",
      uri: "https://nhaxinh.com/wp-content/uploads/2021/10/bridge-sofa-100762.jpg",
      description:
        "Sofa Maxine 3 chỗ với thiết kế gọn gàng, tối giản. Sofa Maxine 3 chỗ “linh động”, “ấm áp” với nhiều màu sắc khác nhau để chọn lựa, phù hợp không gian phòng khách hiện đại của gia đình bạn.",
    },
    {
      id: "3",
      name: "SOFA MOON 2 chỗ – vải màu xanh lá",
      price: "1758000",
      uri: "https://nhaxinh.com/wp-content/uploads/2022/03/104501-sofa-moon-2-cho-vai-hong-xanh-la.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
    {
      id: "4",
      name: "SOFA MOON 2 chỗ – vải màu xanh dương",
      price: "1758000",
      uri: "https://nhaxinh.com/wp-content/uploads/2022/03/104500-sofa-moon-2-cho-vai-xanh-duong.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
    {
      id: "5",
      name: "Đèn bàn Lombard 107338E",
      price: "1720000",
      uri: "https://nhaxinh.com/wp-content/uploads/2022/05/Den-Ban-Lombard-107338E-3105570-677x400.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
    {
      id: "6",
      name: "Sofa Miami 2 chỗ hiện đại vải xanh",
      price: "1490000",
      uri: "https://nhaxinh.com/wp-content/uploads/2021/10/sofa-miami.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
    {
      id: "7",
      name: "Bàn làm việc 14",
      price: "1800000",
      uri: "https://danetti-lifestyle.s3.amazonaws.com/uploads/2012/10/lola_white_gloss_bar_table_thumb_medium.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
    {
      id: "8",
      name: "Bàn Làm Việc Match",
      price: "3200000",
      uri: "https://nhaxinh.com/wp-content/uploads/2021/10/ban_lam_viec_match_1.jpg",
      description:
        "Một chiếc sofa nhỏ gọn cho căn hộ của bạn nhưng vẫn mang vẻ hiện đại. Phần tựa lưng của sofa moon với đường nét bo tròn, nghiêng hỗ trợ tối đa cho việc nghỉ ngơi thư giãn. Chất liệu vải bông mềm tạo sự thoải mái khi ngồi kết hợp với màu sắc pastel nhẹ nhàng sẽ là giải pháp lựa chọn tối ưu dành cho không gian nội thất căn hộ có diện tích khiêm tốn.",
    },
  ];
  const renderProduct = () => {
    return dataProduct.map((item, index) => {
      return (
        <View key={item.id} style={styles.logoGroupProduct}>
          <Image style={styles.productImg} source={{ uri: item.uri }} />
          <View style={styles.productName}>
            <Text
              onPress={() =>
                navigation.navigate("ProductScreen", {
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  uri: item.uri,
                  description: item.description,
                })
              }
            >
              {item.name}
            </Text>
            <Text>
              <Text style={{ textDecorationLine: "underline" }}>đ</Text>
              {item.price}
            </Text>
          </View>
        </View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="search" style={styles.search} />
        <TextInput style={styles.inputSearch}></TextInput>
      </View>

      <View style={styles.listLogo}>{renderLogo()}</View>

      <ScrollView>
        <View style={styles.productList}>{renderProduct()}</View>
      </ScrollView>
      <Footer navigation={navigation}></Footer>
    </View>
  );
}
