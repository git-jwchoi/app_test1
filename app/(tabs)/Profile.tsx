import React from "react";
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function MyPage() {
  const handleLogout = () => {
    // 여기서 실제 로그아웃 로직 처리 (ex. Firebase, OAuth, AsyncStorage 등)
    Alert.alert("로그아웃", "성공적으로 로그아웃 되었습니다.");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>⚙️ 설정 / 마이페이지</Text>

      <View style={styles.profileContainer}>
        <Image
          source={require("../../assets/images/avata.png")} // 기본 프로필 이미지
          style={styles.profileImage}
        />
        <Text style={styles.username}>니팅러버123</Text>
        <Text style={styles.email}>knitlover@example.com</Text>
      </View>

      <View style={styles.settingsContainer}>
        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>🔔 알림 설정</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>🎨 테마 변경</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem}>
          <Text style={styles.settingText}>📄 앱 정보</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingItem} onPress={handleLogout}>
          <Text style={[styles.settingText, { color: "red" }]}>
            🚪 로그아웃
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffaf0",
  },
  header: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 50,
    textAlign: "center",
    marginBottom: 20,
  },
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "600",
  },
  email: {
    fontSize: 14,
    color: "#666",
  },
  settingsContainer: {
    paddingHorizontal: 30,
  },
  settingItem: {
    paddingVertical: 15,
    borderBottomColor: "#ddd",
    borderBottomWidth: 1,
  },
  settingText: {
    fontSize: 16,
  },
});
