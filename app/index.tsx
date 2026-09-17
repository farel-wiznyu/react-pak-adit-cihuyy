import { Text, View } from "react-native";
import VariabelSoal from "./variabel/variabel";
import KondisiSoal from "./kondisi/kondisi";
import LoopingSoal from "./looping/looping";
import ArraySoal from "./array/array";
import FungsiSoal from "./fungsi/fungsi";
import KomponenSoal from "./komponen/komponen";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>cihuy</Text>
      {/* <VariabelSoal /> */}
      <KondisiSoal />
      {/* <LoopingSoal /> */}
      {/* <ArraySoal /> */}
      {/* <FungsiSoal /> */}
      {/* <KomponenSoal /> */}
    </View>
  );
}
