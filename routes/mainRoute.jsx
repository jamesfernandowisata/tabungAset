import { createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import SplashScreen from "../app/pages/misc/SplashScreen";

import LoginPage from "../app/pages/login/LoginPage";
import RegisterPage from "../app/pages/login/RegisterPage";
import tespage from "../app/pages/misc/tespage";
import homepage from "../app/pages/navigation/homepage";

import loadingHeader from "../app/pages/loading/loadingHeader";
import loadingHeaderAdd from "../app/pages/loading/loadingHeaderAdd";
import loadingDetail from "../app/pages/loading/loadingDetail";
import loadingDetailAdd from "../app/pages/loading/loadingDetailAdd";

import unloadingHeader from "../app/pages/unloading/unloadingHeader";
import unloadingHeaderAdd from "../app/pages/unloading/unloadingHeaderAdd";
import unloadingDetail from "../app/pages/unloading/unloadingDetail";
import unloadingDetailAdd from "../app/pages/unloading/unloadingDetailAdd";

import deliveryHeader from "../app/pages/delivery/deliveryHeader";
import deliveryHeaderAdd from "../app/pages/delivery/deliveryHeaderAdd";
import deliveryDetail from "../app/pages/delivery/deliveryDetail";
import deliveryDetailAdd from "../app/pages/delivery/deliveryDetailAdd";

import NavigateAsset from "../app/pages/navigation/NavigateAsset";
import RegisterAssetsH from "../app/pages/assetFile/register/RegisterAssetsH";
import RegisterAssetsA from "../app/pages/assetFile/register/RegisterAssetsA";

import ViewAsset from "../app/pages/assetFile/view/ViewAsset";
import ViewAssetStatus from "../app/pages/assetFile/view/ViewAssetStatus";
import ViewAssetDetail from "../app/pages/assetFile/view/ViewAssetDetail";


const AppNavigator = createSwitchNavigator(
  {
    SplashSc: SplashScreen,
    loginPage: LoginPage,
    regis:RegisterPage,
    tespage: tespage,
    home: homepage,
    loadHead: loadingHeader,
    loadAddH: loadingHeaderAdd,
    loadDet: loadingDetail,
    loadDetAdd: loadingDetailAdd,
    unloadHead: unloadingHeader,
    unloadAddH: unloadingHeaderAdd,
    unloadDet: unloadingDetail,
    unloadDetAdd: unloadingDetailAdd,
    delifHead: deliveryHeader,
    delifAddH: deliveryHeaderAdd,
    delivDet: deliveryDetail,
    delivDetAdd: deliveryDetailAdd,
    assetNav: NavigateAsset,
    regisAsset: RegisterAssetsH,
    addRegis: RegisterAssetsA,
    viewAsset: ViewAsset,
    viewAS: ViewAssetStatus,
    viewAD: ViewAssetDetail
  },
  {
    initialRouteName: "SplashSc",
    headerMode: "none"
  }
);

export default AppNavigator;
