import {createSwitchNavigator} from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import homepage from "../app/pages/navigation/homepage";
import loadingHeader from "../app/pages/loading/loadingHeader";
import loadingHeaderAdd from "../app/pages/loading/loadingHeaderAdd";
import unloadingHeader from "../app/pages/unloading/unloadingHeader";
import unloadingHeaderAdd from "../app/pages/unloading/unloadingHeaderAdd";
import deliveryHeader from "../app/pages/delivery/deliveryHeader";
import deliveryHeaderAdd from "../app/pages/delivery/deliveryHeaderAdd"
const AppNavigator = createSwitchNavigator(
    {
        home :homepage,
        loadHead :loadingHeader,
        loadAddH :loadingHeaderAdd,
        unloadHead:unloadingHeader,
        unloadAddH: unloadingHeaderAdd,
        delifHead:deliveryHeader,
        delifAddH:deliveryHeaderAdd,
    },
    {
        initialRouteName: "home",
        headerMode: "none"
    }

);

export default AppNavigator;