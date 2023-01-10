import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Archivo_400Regular, Archivo_700Bold } from "@expo-google-fonts/archivo";
import { Poppins_400Regular, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import Stack from "./src/routes/Stack";

  function App() {
    const [ appReady, setAppReady ] = useState(false);

      useEffect(() => {
        (async() => {
          try {
            await SplashScreen.preventAutoHideAsync();

              await Font.loadAsync({ Archivo_400Regular });
              await Font.loadAsync({ Archivo_700Bold });
              await Font.loadAsync({ Poppins_400Regular });
              await Font.loadAsync({ Poppins_600SemiBold });
          } catch(error) {
            console.warn(error);
          } finally {
            setAppReady(true);
          };
        }) ();
      }, []);

        if (!appReady) {
          return null;
        } else {
          SplashScreen.hideAsync();
        };

          return (
            <>
              <StatusBar style="light"/>
                <Stack/>
            </>
          );
  };

    export default App;