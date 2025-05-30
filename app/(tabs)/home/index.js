import { StyleSheet, View, ScrollView, Image, Text, Pressable } from "react-native";
import caption from '../../../assets/images/caption.png';
import Octicons from '@expo/vector-icons/Octicons';
import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Entypo from '@expo/vector-icons/Entypo';
import { useRouter } from "expo-router";


const Index = () => {
  const router = useRouter();
  return (
    <ScrollView contentContainerStyle={{ paddingBottom: 30 }}>
      <View style={{ padding: 12, height: 200, backgroundColor: "#FEBE10" }}>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
  <Pressable onPress={() => router.push("/ProfileScreen")}>
    <Octicons name="three-bars" size={24} color="white" style={{ marginRight: 10 }} />
  </Pressable>
  <Image
    style={{ width: 300, height: 50, resizeMode: "cover", marginLeft: -40 }}
    source={caption}
  />
</View>
        <View style={{ marginTop: 20, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
          <View>
            <Text style={{ fontSize: 13 }}>Hi Prerana!</Text>
            <Text style={{ marginTop: 2, color: "white" }}>Home | Bhiwandi-421302</Text>
          </View>
          <View style={{ flexDirection: "row", alignItems: "center", marginLeft: 4 }}>
            <Ionicons name="information-circle-outline" size={24} color="black" />
            <Text style={{ width: 60, fontSize: 12, color: "#0066b2", marginLeft: 4 }}>QUICK HERE</Text>
          </View>
        </View>
      </View>
      <View style={{
        padding: 10,
        backgroundColor: "white",
        width: 300,
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: 10,
        marginTop: -45, // Adds space below the header
      }}>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Ionicons name="notifications-outline" size={24} color="black" />
          <View >
            <Text style={{ fontSize: 15, color: "#0066b2", fontWeight: "bold" }}>QUICK ORDER</Text>
            <Text style={{ marginTop: 4 }}>Book a pickup and a delivery option</Text>
            <Text >We will be at your doorstep on time</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 7,
              }}>
              <Pressable
              onPress={()=> router.push("/home/address")}
                style={{
                  backgroundColor: "#FEBE10",
                  paddingHorizontal: 10,
                  paddingVertical: 5,
                  borderRadius: 4,
                }}>
                <Text style={{ fontSize: 13, fontWeight: 400 }}>BOOK NOW</Text>
              </Pressable>
              <FontAwesome6 name="truck" size={24} color="#034694" />
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 30, marginHorizontal: 3, flexDirection: "row", alignItems: "center", gap: 6 }}>
        <View style={{ backgroundColor: "white", padding: 8, borderRadius: 10 }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
            <View>
              <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}
              >
                Club{" "}
                <Text
                  style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}
                >
                  Ultimate
                </Text>
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "300", width: 130, marginTop: 10 }}
              >
                Put your laundry on Cruise Control
              </Text>
              <Text style={{ fontSize: 12, fontWeight: "300", width: 130, marginTop: 3 }}>
                Subscribe and get the benefits
              </Text>
            </View>
            <Entypo name="triangle-right" size={24} color="#034694" />
          </View>
        </View>
        <View style={{
          backgroundColor: "white",
          paddingHorizontal: 3,
          paddingVertical: 11,
          borderRadius: 10,
          marginRight: 20,
        }}
        >
          <View style={{ flexDirection: "row", alignItems: "center", gap: 8 }}>
            <Ionicons name="basket-outline" size={24} color="#034694" />
            <View>
              <Text style={{ color: "#FEBE10", fontSize: 15, fontWeight: "bold" }}>
                Place Your <Text style={{ color: "#034694", fontSize: 15, fontWeight: "bold" }}
                >
                  Order
                </Text>
              </Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "300",
                width: 130,
                marginTop: 3,
              }}
              >
                select items from the catalogue below
              </Text>
              <Text style={{
                fontSize: 12,
                fontWeight: "300",
                width: 130,
                marginTop: 3,
              }}
              >
                and book your order. It's about time
              </Text>
            </View>

          </View>
        </View>
      </View>
      <View
        style={{
          marginHorizontal: 3,
          marginVertical: 10,
          flexDirection: "row",
          alignItems: "center",
          gap: 6,
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: 10,
              borderRadius: 10,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}
              >
                AFFORDABLE PRICES
              </Text>
              <Text style={{ marginTop: 4 }}>Get our Price List</Text>
            </View>
            <Entypo name="triangle-right" size={18} color="#034694" />
          </View>
          <View
            style={{
              backgroundColor: "white",
              flexDirection: "row",
              alignItems: "center",
              gap: 12,
              padding: 10,
              borderRadius: 10,
              marginTop: 10,
            }}
          >
            <View>
              <Text
                style={{ fontSize: 13, fontWeight: "500", color: "#034694" }}
              >
                AFFORDABLE PRICES
              </Text>
              <Text style={{ marginTop: 4 }}>Get our Price List</Text>
            </View>
            <Entypo name="triangle-right" size={18} color="#034694" />
          </View>
        </View>
        <View  style={{
            backgroundColor: "white",
            padding: 12,
            borderRadius: 10,
            flexDirection: "row",
            alignItems: "center",
            gap: 10,
          }}
          >
          <View>
            <Text style={{
              fontSize: 20,
              color: "#FEBE10",
              width: 100,
              fontWeight: "bold",
            }}
            >
              WHAT'S THE PLAN
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: "#034694",
                width: 100,
                fontWeight: "bold",
              }}
            >
              FOR THE PLANET
            </Text>
          </View>
          <Entypo name="triangle-right" size={24} color="#034694" />
        </View>
      </View>
      <View   style={{
          backgroundColor: "white",
          padding: 10,
          marginRight: "auto",
          marginLeft: "auto",
          borderRadius: 7,
        }}
        >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
        <Ionicons name="notifications-outline" size={24} color="black" />
        <Text>Next Available</Text>
        </View>
        <Text style={{
            fontSize: 14,
            fontWeight: "500",
            marginTop: 5,
            color: "#034694",
            width: 150,
          }}
          >
            Order Within 15 mins to catch this pickUp Slot</Text>
            <Pressable
          style={{
            borderColor: "#034694",
            paddingHorizontal: 10,
            paddingVertical: 4,
            justifyContent: "center",
            alignItems:"center",
            borderWidth:0.7,
            width:130,
            marginTop:8,
            borderRadius:5
          }}
        >
          <Text>ADD ITEMS</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default Index;
const styles = StyleSheet.create({});
