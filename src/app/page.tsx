import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function Home() {
    return (
        <main className="grid lg:grid-cols-3 p-4 gap-2">
            <Card>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem quasi qui dolore quis ipsam laboriosam sed sunt,
                    veritatis libero? Quidem minus repellendus fuga ipsam
                    obcaecati dolor totam eaque iure excepturi! Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Dolorum tempore
                    quia numquam magni, delectus laborum doloribus et minima
                    totam molestiae quis, facilis sint est illo alias mollitia
                    perferendis. Libero, molestiae.
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={"/"}></Link>
                </CardFooter>
            </Card>
            <Card>
                <CardHeader>
                    <CardTitle>Create project</CardTitle>
                    <CardDescription>
                        Deploy your new project in one-click.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Rem quasi qui dolore quis ipsam laboriosam sed sunt,
                    veritatis libero? Quidem minus repellendus fuga ipsam
                    obcaecati dolor totam eaque iure excepturi! Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Dolorum tempore
                    quia numquam magni, delectus laborum doloribus et minima
                    totam molestiae quis, facilis sint est illo alias mollitia
                    perferendis. Libero, molestiae.
                </CardContent>
                <CardFooter className="flex justify-between">
                    <Link href={"/"}></Link>
                </CardFooter>
            </Card>
        </main>
    );
}
