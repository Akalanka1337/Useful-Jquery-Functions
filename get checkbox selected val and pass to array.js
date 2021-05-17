var published_num = [];

        $(document).on("click", ".getTelNum", function () {
            $(".getTelNum").change(function () //set selected checkbox array when change
            {
                var phone_num = new Array();
                $(".getTelNum").each(function ()
                {
                    if ($(this).is(':checked'))
                    {
                        phone_num.push($(this).val());
                    }
                });
                published_num = phone_num; //Set phone array to glob array
            });


        });

        $(document).on("click", "#send_sms", function () {
            console.log(published_num);
        });
