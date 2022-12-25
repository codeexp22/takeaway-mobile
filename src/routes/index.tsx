import React from 'react';
import { LoginPage } from '../pages/company/auth/login';
import { RootStackParamsList } from '../RootStackParamsList';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator<RootStackParamsList>();

function Routes(){
	return (
		<Stack.Navigator>
			<Stack.Screen
				name="companyLogin"
				component={LoginPage}
				options={{
					headerShown: false
				}}
			/>
		</Stack.Navigator>
	);
}

export { Routes };