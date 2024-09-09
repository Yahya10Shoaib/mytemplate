import React from "react";
import { View, Image, Dimensions, StatusBar, Platform } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SPLASH } from "../assets/images";
import { resetAndGo } from "@/utils/function";
// import { resetAndGo } from "../../utils/function";
// import { getLoggedInSessionData, getLoggedInSessionToken, getRoleUser } from "./utils/storage";
// import { isEmpty } from "./utils/function";
// import { setUserInfo } from "@/stores/reducers/auth";

const Splash = () => {
  let timmerRef = React.useRef<View>(null);
  const navigation = useNavigation();
  // const dispatch = useDispatch();
  // const {data, isLoading, status, error} = useMeQuery();
  React.useEffect(() => {
    setTimeout(() => {
      startAfterDelay('Login')
      }, Platform.OS === "ios" ? 1000 : 3000);
    return () => {
      // clearTimeout(timmerRef);
    };
  }, []);

  // const redirectScreen = async () => {
  //   let storedUserToken = await getLoggedInSessionToken();
  //   let getdUserData = await getLoggedInSessionData();
  //   if (!isEmpty(storedUserToken)) {
  //     // console.log('====error=========',error)
  //     // console.log('====status=========',status)
  //     //  console.log('====getdUserData=========',getdUserData)
  //      dispatch(setUserInfo(getdUserData))
  //     let userRole = await getRoleUser()
  //     if(userRole === '2') startAfterDelay("StoreNavigator")
  //     else startAfterDelay("Main")
  //     }else{
  //       startAfterDelay("Login");
  //     }
  // }

  const startAfterDelay = (routeName: string) => {
    resetAndGo(navigation, routeName, "");
  };


  return (
    <View style={{ flex: 1, justifyContent: "center"}}>
      <StatusBar translucent backgroundColor="transparent" />
      {/* {Platform.OS === "android" ? ( */}
        <Image
          style={{
            flex: 1,
            height: Dimensions.get("window").height,
            width: Dimensions.get("window").width,
          }}
          source={SPLASH}
        />
     {/* ) : null} */}
    </View>
  );
};

export default Splash;
