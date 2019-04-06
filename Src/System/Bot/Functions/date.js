module.exports = {
    coded : "2019-04-05",
    name : "date",
    
    execute(time) {
        date = (time) => {
            d = new Date();

          //Lets grab all of our relivant Date and Time information.
            yyyy = d.getFullYear(time);
            mm = d.getMonth(time) + 1;
            dd = d.getDate(time);
            HH = `${d.getHours(time)}`;
            MM = `${d.getMinutes(time)}`;
            SS = `${d.getSeconds(time)}`;
          
            
          //If our Hour, Minute, or Second is in the "ones" add a zero before the number.
            if(HH.length == 1) HH = `0${HH}`;
            if(MM.length == 1) MM = `0${MM}`;
            if(SS.length == 1) SS = `0${SS}`;

            
          //Lets set our TimeZone to Pacific Time.
            pstDay = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
            pdtDay = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
            zone = " [zone]";

            switch(mm){
                case(11):
                case(12):
                case(1):
                case(2):
                case(3):
                    zone = " PST(-8.GMT)";

                    if(mm == 11 && dd == 1 || dd == 2) zone = " PDT(-7.GMT)";
                    if(mm == 3 && pdtDay.includes(dd)) zone = " PDT(-7.GMT)";                    
                break;
                case(3):
                case(4):
                case(5):
                case(6):
                case(7):
                case(8):
                case(9):
                case(10):
                case(11):
                    zone = " PDT(-7.GMT)";

                    if(mm == 11 && pstDay.includes(dd)) zone = " PST(-8.GMT)";
                break;
                default:
                  zone = "[**]";
            };


            //dShort = `${yyyy}, ${mm} ${dd} - ${HH}:${MM}:${SS} ${zone}`;

          //Lets Modify our month [mm] to it's name format.
            switch(mm){
                case(1):
                    month = "January";
                break;
                case(2):
                    month = "Febuary";
                break;
                case(3):
                    month = "March";
                break;
                case(4):
                    month = "April";
                break;
                case(5):
                    month = "May";
                break;
                case(6):
                    month = "June";
                break;
                case(7):
                    month = "July";
                break;
                case(8):
                    month = "August";
                break;
                case(9):
                    month = "September";
                break;
                case(10):
                    month = "October";
                break;
                case(11):
                    month = "November";
                break;
                case(12):
                    month = "December";
                break;
                default:
                  month = "[**]";
            };


          //Instead of just a number, lets make it as if we're speaking the number. "First, Second, Third, Fourth".
            switch(dd){
                case(1):
                case(21):
                case(31):
                    day = "'st";
                break;
                case(2):
                case(22):
                    day = "'nd";
                break;
                case(3):
                case(23):
                    day = "'rd";
                break;
                case(4):
                case(5):
                case(6):
                case(7):
                case(8):
                case(9):
                case(10):
                case(11):
                case(12):
                case(13):
                case(14):
                case(15):
                case(16):
                case(17):
                case(18):
                case(19):
                case(20):
                case(24):
                case(25):
                case(26):
                case(27):
                case(28):
                case(29):
                case(30):
                    day = "'th";
                break;
                default:
                    day = "[*]";
            };

          //Lets put all of tis information into a readable string.
            return dLong = `${month} ${dd}${day}, ${yyyy} - ${HH}:${MM}:${SS}${zone}`;
        };

        return date(time);
    }
  };