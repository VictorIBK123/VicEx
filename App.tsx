import { createStackNavigator } from '@react-navigation/stack';
import './gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import SplashScreen from './screens/splashscreen';
import ExchangeRates from './screens/exchangerates';
import EnterPhoneScreen from './screens/auth/enterphone';
import VerifyPhoneScreen from './screens/auth/verifyphone';
import CreateAccount from './screens/auth/createaccount';
import VerifyEmailScreen from './screens/auth/verifyemail';
import Login from './screens/auth/login';
import PersonalInformation from './screens/auth/personalinfo';
import SetPin from './screens/setpin';
import ResetPassword from './screens/resetpassword';
import ResetPasswordOtp from './screens/resetpasswordotp';
import NewPassword from './screens/newpassword';
import TabApp from './components/tab';

export default function App() {
  const Stack= createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='splash_screen'>
        <Stack.Screen name="splash_screen"      options={{headerShown:false, headerTitleAlign:'center', title: 'Exchange Rates'}}       component={SplashScreen} />
        <Stack.Screen name="exchange_rates"     options={{headerShown:true,  headerTitleAlign:'center', title: 'Exchange Rates'}}       component={ExchangeRates} />
        <Stack.Screen name="enter_phone"        options={{headerShown:false, headerTitleAlign:'center', title: 'Enter Phone Number'}}   component={EnterPhoneScreen} />
        <Stack.Screen name="verify_phone"       options={{headerShown:true,  headerTitleAlign:'center', title: 'Verify phone'}}         component={VerifyPhoneScreen} />
        <Stack.Screen name="create_account"     options={{headerShown:true,  headerTitleAlign:'center', title: 'Create your account'}}  component={CreateAccount} />
        <Stack.Screen name="verify_email"       options={{headerShown:true,  headerTitleAlign:'center', title: 'Verify email'}}         component={VerifyEmailScreen} />
        <Stack.Screen name="login"              options={{headerShown:false, headerTitleAlign:'center', title: 'Login to your account'}} component={Login} />
        <Stack.Screen name="personal_info"      options={{headerShown:true,  headerTitleAlign:'center', title: 'Personal Information'}} component={PersonalInformation} />
        <Stack.Screen name="set_pin"            options={{headerShown:true,  headerTitleAlign:'center', title: 'Set Your Pin'}}         component={SetPin} />
        <Stack.Screen name="reset_password"     options={{headerShown:true,  headerTitleAlign:'center', title: 'Reset Password'}}       component={ResetPassword} />
        <Stack.Screen name='reset_password_otp' options={{headerShown:true,  headerTitleAlign:'center', title: 'Reset Password'}}       component={ResetPasswordOtp} />
        <Stack.Screen name='new_password'       options={{headerShown:true,  headerTitleAlign:'center', title: 'Reset Password'}}       component={NewPassword} />
        <Stack.Screen name='thetab'             options={{headerShown:false}} component={TabApp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


