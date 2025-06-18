// app/registration.tsx
import { AuthLogin } from '@/authUtils/AuthLogin';
import { AuthLayout } from '@/shared/AuthLayout/AccountLayout';

export default function LoginScreen() {
    return (
        <AuthLayout>
            <AuthLogin />
        </AuthLayout>
    );
}

// ✅ Proper way to hide header in Expo Router
export const screenOptions = {
    headerShown: false,
};