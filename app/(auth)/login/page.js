import { signIn } from "@/auth";

export default function LoginPage() {
  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '2rem' }}>
      <h1>Login</h1>
      <form 
        action={async (formData) => {
          "use server"
          // We pass the formData directly, but add the redirectTo option as the second argument
          await signIn("credentials", {
            email: formData.get("email"),
            password: formData.get("password"),
            redirectTo: "/dashboard", 
          });
        }} 
        style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
      >
        <input name="email" type="email" placeholder="Email" required />
        <input name="password" type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p>Need an account? <a href="/register">Register here</a></p>
    </div>
  );
}