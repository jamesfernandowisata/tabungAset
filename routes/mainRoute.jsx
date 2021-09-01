import {createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import homepage from "../app/pages/navigation/homepage";
import loadingHeader from "../app/pages/loading/loadingHeader";
import loadingHeaderAdd from "../app/pages/loading/loadingHeaderAdd";
import unloadingHeader from "../app/pages/unloading/unloadingHeader";
import unloadingHeaderAdd from "../app/pages/unloading/unloadingHeaderAdd";
import deliveryHeader from "../app/pages/delivery/deliveryHeader";
import deliveryHeaderAdd from "../app/pages/delivery/deliveryHeaderAdd";
import NavigateAsset from "../app/pages/navigation/NavigateAsset";
import RegisterAssetsH from "../app/pages/assetFile/register/RegisterAssetsH"; 
import RegisterAssetsA from "../app/pages/assetFile/register/RegisterAssetsA";
import ViewAsset from "../app/pages/assetFile/view/ViewAsset";
import ViewAllAssets from "../app/pages/assetFile/view/ViewAllAssets";
import ViewAssetDetail from "../app/pages/assetFile/view/ViewAssetDetail";

const AppNavigator = createSwitchNavigator(
    {
        home :homepage,
        loadHead :loadingHeader,
        loadAddH :loadingHeaderAdd,
        unloadHead:unloadingHeader,
        unloadAddH: unloadingHeaderAdd,
        delifHead:deliveryHeader,
        delifAddH:deliveryHeaderAdd,
        assetNav: NavigateAsset,
        regisAsset: RegisterAssetsH,
        addRegis:RegisterAssetsA,
        viewAsset: ViewAsset,
        viewAllA: ViewAllAssets,
        viewAllAD: ViewAssetDetail

    },
    {
        initialRouteName: "home",
        headerMode: "none"
    }

);

export default AppNavigator;