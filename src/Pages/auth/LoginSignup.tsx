import { useState, useContext } from "react";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import { createUser, getUserToken } from "@/constants/api";
import AuthContext from "@/AuthProvider";
import { Button } from "@/Components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/Components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";

const LoginSignup = () => {
  const { setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const defaultValue = location.pathname === "/signup" ? "signup" : "signin";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const [signupErrMsg, setSignupErrMsg] = useState("");

  const [searchParams] = useSearchParams();
  const signupStatus = searchParams.get("signup");

  const handleSignIn = async (event: any) => {
    event.preventDefault();
    setLoginErrMsg(""); // Clear previous error message
    const data = await getUserToken(email, password);
    if (data.access) {
      // the request resolved successfully if access is present.
      const accessToken = data.access;
      const refreshToken = data.refresh;
      setIsAuth!({ accessToken, refreshToken });
      navigate("/");
    } else {
      // else we know there is an error
      setLoginErrMsg(data.error);
    }
  };

  const userInfo = {
    password: password,
    email: email,
    first_name: firstName,
    last_name: lastName,
  };

  const handleSignup = async (event: any) => {
    event.preventDefault();
    setSignupErrMsg(""); // Clear previous error message
    const data = await createUser(userInfo);
    if (data.id) {
      navigate("/login?signup=success");
      window.location.reload();
    } else if (data.email) {
      setSignupErrMsg(data.email);
    } else if (data.password) {
      setSignupErrMsg(data.password);
    }
  };

  return (
    <section className="container shrinked-container min-h-[90vh] flex justify-center mt-10 lg:mt-20">
      <Tabs defaultValue={defaultValue} className="max-w-[450px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signin">Sign In</TabsTrigger>
          <TabsTrigger value="signup">Create Account</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <Card>
            <form onSubmit={handleSignIn}>
              <CardHeader>
                <CardTitle className="pb-2 text-gray-700">
                  Account Sign-In
                </CardTitle>
                <CardDescription className="pb-4">
                  Enter your email and password to sign into your account.
                </CardDescription>
                {signupStatus && (
                  <span className="text-sm text-green-600">
                    Account creation successful, please sign in.
                  </span>
                )}
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                {loginErrMsg && (
                  <span className="text-sm text-red-500">{loginErrMsg}</span>
                )}
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-gray-700">
                  Sign In
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle className="pb-2 text-gray-700">
                Create Account
              </CardTitle>
              <CardDescription className="pb-4">
                Please fill in the details to register your account.
              </CardDescription>
            </CardHeader>
            <form onSubmit={handleSignup}>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="First Name"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Last Name"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                <div className="space-y-1">
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className="p-3 border-[1.5px] w-full rounded-md mb-6"
                  />
                </div>
                {signupErrMsg && (
                  <span className="text-sm text-red-500">{signupErrMsg}</span>
                )}
              </CardContent>
              <CardFooter>
                <Button type="submit" className="bg-gray-700">
                  Create Account
                </Button>
              </CardFooter>
            </form>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default LoginSignup;
