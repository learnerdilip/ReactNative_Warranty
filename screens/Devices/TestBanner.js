import React, { useState } from "react";
import { Image } from "react-native";
import { Banner } from "react-native-paper";

export default function TestBanner() {
  const [visible, setVisible] = useState(true);
  return (
    <Banner
      visible={visible}
      actions={[
        {
          label: "Close this",
          onPress: () => setVisible(false)
        },
        {
          label: "Thank you!",
          onPress: () => setVisible(false)
        }
      ]}
      icon={({ size }) => (
        <Image
          source={{
            uri: "https://avatars3.githubusercontent.com/u/17571969?s=400&v=4"
          }}
          style={{
            width: size,
            height: size
          }}
        />
      )}
    >
      We recommend to add important devices to keep track of their warranties
    </Banner>
  );
}
