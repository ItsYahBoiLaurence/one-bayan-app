import { colors } from "@/src/styles/colors";
import { common } from "@/src/styles/common";
import { typography } from "@/src/styles/typography";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";
import { Card } from "react-native-paper";

export default async function News() {
  return (
    <View style={[common.screenContainer]}>
      <View
        style={[
          common.horizontalFlex,
          { flexDirection: "row", alignItems: "center" },
        ]}
      >
        <MaterialCommunityIcons
          name="newspaper-variant-outline"
          size={typography.title}
          color={colors.royalBlue}
        />
        <Text
          style={[
            common.textTitle,
            {
              fontSize: typography.title,
            },
          ]}
        >
          City News
        </Text>
      </View>
      <View>
        <Pressable onPress={() => console.log("Hello")}>
          <Card>
            <Card.Cover
              source={{
                uri: `https://loremflickr.com/600/600/dogs`,
              }}
              style={{ borderBottomRightRadius: 0, borderBottomLeftRadius: 0 }}
            />
            <Card.Title
              title={<Text style={common.textTitle}>Card title</Text>}
            />
          </Card>
        </Pressable>
      </View>
    </View>
  );
}
