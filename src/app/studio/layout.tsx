import { Metadata } from "next";

export const metadata: Metadata = {
    title: "E-Commerce Website",
    description: "E-Commerce Website with Sanity, Clerk and Stripe",
  };

const RootLayout= ({children}:{children : React.ReactNode}) => {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    )
}

export default RootLayout;