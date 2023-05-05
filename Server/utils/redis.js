import { createClient } from "redis";

const client = createClient({
  password: "u6dSiurexZVOfp3om7V6kjzutUut8EC0",
  socket: {
    host: "redis-17008.c305.ap-south-1-1.ec2.cloud.redislabs.com",
    port: 17008,
  },
});

client.connect();
client.on("connect", () => {
  console.log("Redis client connected");
});

export default client;