// app/registration.tsx
import { AuthRegister } from '@/authUtils/AuthRegister';
import { AuthLayout } from '@/shared/AuthLayout/AccountLayout';

export default function RegistrationScreen() {
    return (
        <AuthLayout>
            <AuthRegister />
        </AuthLayout>
    );
}


// ✅ Proper way to hide header in Expo Router
export const screenOptions = {
    headerShown: false,
};