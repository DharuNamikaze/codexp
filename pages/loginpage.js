//pages/login
import { useSession } from "next-auth/react";
import Image from "next/image";
import clientPromise from "../lib/mongodb";
function Login(){
  const { data: session, status } = useSession();
  
    if (status === "loading") {
      return <div className="text-center py-4">Loading...</div>;
  }

  return (<>
  <div>
  <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Next.js Auth with Google</h1>


  {session ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg">Signed in as {session.user.email}</p>
                    <p className="text-sm text-gray-600">User ID: {session.user.id}</p>
                    {session.user.image && (
                        <Image src={session.user.image} alt="User Image" className="mt-4 rounded-full w-20 h-20" />
                    )}
                    <button
                        onClick={() => signOut()}
                        className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign out
                    </button>
                </div>
            ) : (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <p className="text-lg mb-4">Not signed in</p>
                    <button
                        onClick={() => signIn("google")}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Sign in with Google
                    </button>
                </div>
            )}
  </div>
  </div>
  </>);
}
export default Login;