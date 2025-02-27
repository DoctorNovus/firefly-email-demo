import { Application } from "@outwalk/firefly";
import { ExpressPlatform } from "@outwalk/firefly/express";


/* setup the platform and global middleware */
const platform = new ExpressPlatform();

/* start the application */
new Application({ platform }).listen();
