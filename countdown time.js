                                                    //CountDown For Verification
                                                    var timer2 = "0:11";
                                                    var interval = setInterval(function () {
                                                        var timer = timer2.split(':');
                                                        //by parsing integer, I avoid all extra string processing
                                                        var minutes = parseInt(timer[0], 10);
                                                        var seconds = parseInt(timer[1], 10);
                                                        --seconds;
                                                        minutes = (seconds < 0) ? --minutes : minutes;
                                                        seconds = (seconds < 0) ? 59 : seconds;
                                                        seconds = (seconds < 10) ? '0' + seconds : seconds;
                                                        //minutes = (minutes < 10) ?  minutes : minutes;
                                                        $('.countdown').html(minutes + ':' + seconds);
                                                        if (minutes < 0)
                                                            clearInterval(interval);
                                                        //check if both minutes and seconds are 0
                                                        if ((seconds <= 0) && (minutes <= 0))
                                                            clearInterval(interval);
                                                        if (seconds <= 0) {//Run Any Code Line When TimesUp
                                                            alert('ok');
                                                        }
                                                        timer2 = minutes + ':' + seconds;
                                                    }, 1000);






var interval - must be a global to clearinterval!
