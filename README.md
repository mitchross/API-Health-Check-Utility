## API Health Check Utility
This is a small health check utility I built to check health of an API to see if the API service returned successfully or timed out (it includes timers). 

Recently at the company I worked for we experienced a very strange bug with our companies F5 load balancer that caused *intermittent* API service failures (timeouts/not reachable ).  During our debugging, I built this tool to automatically call the Restful web service on a loop to check its health and look for patterns.

Is there tools that do this already? Yes. Was there much better ways to tackle this problem? Yes. 

I love to program and this was a fun exercise. The code let me debug a bit more and read some of the network exception messages, such as SSL handshake errors. You can print this out in the utility if you want.

## Using the Tool

I used Postman to export the Restful call as "code" in Postman. Look in the code for "//Taken from Postman -> Code -> NodeJS". Replace that body of code with your own API call you want to test. I stripped out the info I was using to test for obvious reasons. 

## Sample Output

    node apitest.js 
    0 s, 0.058 ms - start request 0 
    December 4th 2018, 1:44:15 pm
    1 s, 590.576 ms - request 0 succeeded
    December 4th 2018, 1:44:17 pm
    0 s, 415.205 ms - start request 1
    December 4th 2018, 1:44:17 pm
    10 s, 555.522 ms - stop request 1 due to failure
    December 4th 2018, 1:44:28 pm
    1 s, 455.866 ms - start request 2
    December 4th 2018, 1:44:29 pm
    1 s, 412.287 ms - request 2 succeeded
    December 4th 2018, 1:44:31 pm
    0 s, 593.682 ms - start request 3
    December 4th 2018, 1:44:31 pm
    1 s, 198.206 ms - request 3 succeeded
    December 4th 2018, 1:44:32 pm
    0 s, 803.880 ms - start request 4
    December 4th 2018, 1:44:33 pm
    1 s, 57.882 ms - request 4 succeeded
    December 4th 2018, 1:44:34 pm
    0 s, 945.136 ms - start request 5
    December 4th 2018, 1:44:35 pm
    0 s, 877.361 ms - request 5 succeeded
    December 4th 2018, 1:44:36 pm
    1 s, 125.756 ms - start request 6
    December 4th 2018, 1:44:37 pm
    1 s, 985.918 ms - request 6 succeeded
    December 4th 2018, 1:44:39 pm
    0 s, 15.525 ms - start request 7
    December 4th 2018, 1:44:39 pm
    10 s, 578.195 ms - stop request 7 due to failure
    December 4th 2018, 1:44:50 pm
    1 s, 440.433 ms - start request 8
    December 4th 2018, 1:44:51 pm
    0 s, 826.301 ms - request 8 succeeded
    December 4th 2018, 1:44:52 pm
    1 s, 177.706 ms - start request 9
    December 4th 2018, 1:44:53 pm
    0 s, 725.886 ms - request 9 succeeded
    December 4th 2018, 1:44:54 pm
    1 s, 274.237 ms - start request 10
    December 4th 2018, 1:44:55 pm
    10 s, 590.338 ms - stop request 10 due to failure

> Written with [StackEdit](https://stackedit.io/).
