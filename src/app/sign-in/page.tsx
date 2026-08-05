import LoginForm from "@/components/signupForm/LoginForm";
import SignUpBanner from "@/components/signupForm/SignUpBanner";

export default function SigninPage() {
  return (
    <main className="min-h-screen bg-[#f8faf8]">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center justify-center px-4 py-10 lg:px-8">
        <div className="grid w-full overflow-hidden min-h-[808px] rounded-3xl border border-gray-200 bg-white shadow-xl lg:grid-cols-2">
          <SignUpBanner />

          <div className="flex items-center justify-center p-8 lg:p-14">
            <LoginForm />
          </div>
        </div>
      </section>
    </main>
  );
}
