Search.setIndex({docnames:["api/ftdi","api/gpio","api/i2c","api/index","api/misc","api/spi","api/uart","api/usbtools","authors","defs","features","index","installation","licenses","pinout","requirements","troubleshooting","urlscheme"],envversion:53,filenames:["api/ftdi.rst","api/gpio.rst","api/i2c.rst","api/index.rst","api/misc.rst","api/spi.rst","api/uart.rst","api/usbtools.rst","authors.rst","defs.rst","features.rst","index.rst","installation.rst","licenses.rst","pinout.rst","requirements.rst","troubleshooting.rst","urlscheme.rst"],objects:{"pyftdi.ftdi":{Ftdi:[0,1,1,""],FtdiError:[0,6,1,""],FtdiFeatureError:[0,6,1,""],FtdiMpsseError:[0,6,1,""]},"pyftdi.ftdi.Ftdi":{add_custom_product:[0,2,1,""],add_custom_vendor:[0,2,1,""],bitbang_enabled:[0,3,1,""],close:[0,4,1,""],create_from_url:[0,2,1,""],decode_modem_status:[0,2,1,""],enable_3phase_clock:[0,4,1,""],enable_adaptive_clock:[0,4,1,""],enable_drivezero_mode:[0,4,1,""],enable_loopback_mode:[0,4,1,""],fifo_sizes:[0,3,1,""],find_all:[0,5,1,""],frequency_max:[0,3,1,""],get_cd:[0,4,1,""],get_cts:[0,4,1,""],get_device:[0,2,1,""],get_dsr:[0,4,1,""],get_error_string:[0,4,1,""],get_identifiers:[0,2,1,""],get_latency_timer:[0,4,1,""],get_ri:[0,4,1,""],has_drivezero:[0,3,1,""],has_mpsse:[0,3,1,""],has_wide_port:[0,3,1,""],ic_name:[0,3,1,""],is_H_series:[0,3,1,""],is_legacy:[0,3,1,""],is_mpsse:[0,3,1,""],modem_status:[0,4,1,""],open:[0,4,1,""],open_bitbang:[0,4,1,""],open_bitbang_from_url:[0,4,1,""],open_from_url:[0,4,1,""],open_mpsse:[0,4,1,""],open_mpsse_from_url:[0,4,1,""],poll_modem_status:[0,4,1,""],purge_buffers:[0,4,1,""],purge_rx_buffer:[0,4,1,""],purge_tx_buffer:[0,4,1,""],read_data:[0,4,1,""],read_data_bytes:[0,4,1,""],read_data_get_chunksize:[0,4,1,""],read_data_set_chunksize:[0,4,1,""],read_pins:[0,4,1,""],set_baudrate:[0,4,1,""],set_bitmode:[0,4,1,""],set_break:[0,4,1,""],set_dtr:[0,4,1,""],set_dtr_rts:[0,4,1,""],set_dynamic_latency:[0,4,1,""],set_error_char:[0,4,1,""],set_event_char:[0,4,1,""],set_flowctrl:[0,4,1,""],set_frequency:[0,4,1,""],set_latency_timer:[0,4,1,""],set_line_property:[0,4,1,""],set_rts:[0,4,1,""],validate_mpsse:[0,4,1,""],write_data:[0,4,1,""],write_data_get_chunksize:[0,4,1,""],write_data_set_chunksize:[0,4,1,""]},"pyftdi.gpio":{GpioController:[1,1,1,""],GpioException:[1,6,1,""]},"pyftdi.gpio.GpioController":{close:[1,4,1,""],configure:[1,4,1,""],direction:[1,3,1,""],is_connected:[1,3,1,""],open_from_url:[1,4,1,""],pins:[1,3,1,""],read:[1,4,1,""],read_port:[1,4,1,""],set_direction:[1,4,1,""],write:[1,4,1,""],write_port:[1,4,1,""]},"pyftdi.i2c":{I2cController:[2,1,1,""],I2cIOError:[2,6,1,""],I2cNackError:[2,6,1,""],I2cPort:[2,1,1,""]},"pyftdi.i2c.I2cController":{configure:[2,4,1,""],exchange:[2,4,1,""],flush:[2,4,1,""],frequency:[2,3,1,""],frequency_max:[2,3,1,""],get_port:[2,4,1,""],poll:[2,4,1,""],poll_cond:[2,4,1,""],read:[2,4,1,""],terminate:[2,4,1,""],validate_address:[2,2,1,""],write:[2,4,1,""]},"pyftdi.i2c.I2cPort":{configure_register:[2,4,1,""],exchange:[2,4,1,""],flush:[2,4,1,""],frequency:[2,3,1,""],poll:[2,4,1,""],poll_cond:[2,4,1,""],read:[2,4,1,""],read_from:[2,4,1,""],shift_address:[2,4,1,""],write:[2,4,1,""],write_to:[2,4,1,""]},"pyftdi.misc":{hexdump:[4,7,1,""],hexline:[4,7,1,""],is_iterable:[4,7,1,""],pretty_size:[4,7,1,""],to_bool:[4,7,1,""],to_int:[4,7,1,""],xor:[4,7,1,""]},"pyftdi.spi":{SpiController:[5,1,1,""],SpiGpioPort:[5,1,1,""],SpiIOError:[5,6,1,""],SpiPort:[5,1,1,""]},"pyftdi.spi.SpiController":{configure:[5,4,1,""],direction:[5,3,1,""],frequency:[5,3,1,""],frequency_max:[5,3,1,""],get_port:[5,4,1,""],gpio_pins:[5,3,1,""],read_gpio:[5,4,1,""],set_gpio_direction:[5,4,1,""],terminate:[5,4,1,""],write_gpio:[5,4,1,""]},"pyftdi.spi.SpiGpioPort":{direction:[5,3,1,""],pins:[5,3,1,""],read:[5,4,1,""],set_direction:[5,4,1,""],write:[5,4,1,""]},"pyftdi.spi.SpiPort":{exchange:[5,4,1,""],flush:[5,4,1,""],frequency:[5,3,1,""],read:[5,4,1,""],set_frequency:[5,4,1,""],write:[5,4,1,""]},"pyftdi.usbtools":{UsbTools:[7,1,1,""],UsbToolsError:[7,6,1,""]},"pyftdi.usbtools.UsbTools":{find_all:[7,5,1,""],flush_cache:[7,2,1,""],get_device:[7,2,1,""],get_string:[7,2,1,""],parse_url:[7,5,1,""],release_device:[7,2,1,""],show_devices:[7,5,1,""]},pyftdi:{ftdi:[0,0,0,"-"],gpio:[1,0,0,"-"],i2c:[2,0,0,"-"],misc:[4,0,0,"-"],spi:[5,0,0,"-"],usbtools:[7,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","classmethod","Python class method"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","staticmethod","Python static method"],"6":["py","exception","Python exception"],"7":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:classmethod","3":"py:attribute","4":"py:method","5":"py:staticmethod","6":"py:exception","7":"py:function"},terms:{"0b1":15,"0b2":8,"0x00":[2,5],"0x04":2,"0x06":2,"0x10":5,"0x12":[2,5],"0x1234":17,"0x20":5,"0x21":2,"0x30":5,"0x34":[2,5],"0x403":17,"0x53":2,"0x5678":17,"0x6001":17,"0x6010":17,"0x6011":17,"0x6014":17,"0x6015":17,"0x7f":2,"0x9f":5,"10e6":5,"10mhz":5,"12e6":5,"12mbp":11,"12mhz":5,"2232d":17,"2232h":[2,5,6,17],"230x":17,"232h":[2,5,17],"232r":17,"3mbaud":6,"3mbp":[10,11],"4232h":17,"4432h":5,"boolean":[4,5],"break":[0,7,8,17],"byte":[0,2,4,5,6,16],"case":2,"cl\u00e9ment":8,"class":12,"default":[0,4,7],"export":[2,5,16],"final":4,"float":[0,2,5],"function":0,"import":[6,17],"int":[0,1,2,4,5,7],"long":[8,13],"new":[0,1,5,7],"public":13,"return":[0,1,2,4,5,7],"short":0,"static":[0,7],"switch":[0,6],"true":[0,2,4,5],"try":16,"while":[0,5,10],AND:13,ARE:13,Added:8,BUT:13,CTS:[0,14],FOR:13,For:[1,10,13],IDs:[],Its:0,NOT:[13,15],Not:10,RTS:[0,8,14],SUCH:13,THE:13,TMS:14,The:[0,5,6,7,10,12,17],Then:6,There:[0,5,6,12,17],USE:13,Use:[0,5],Useful:0,With:12,_a_:4,_b_:4,_from_url:17,abbrevi:4,abl:0,about:[7,15],abov:[0,4,6,12,13,15],acbu:14,acbus0:14,acbus1:14,acbus2:14,acbus3:14,acbus4:14,acbus5:14,acbus6:14,acbus7:14,accept:[0,2,5,17],access:[10,11,12],achiev:[0,4],ack:2,acknowledg:2,act:6,activ:[0,5,15],actual:[12,13],adam:8,adapt:[0,8,10],adbus0:14,adbus1:14,adbus2:14,adbus3:14,adbus4:14,adbus5:14,adbus6:14,adbus7:14,add:[0,8,12,17],add_custom_product:[0,17],add_custom_vendor:[0,17],added:2,address:[1,2,5,8,10],addus:12,advanc:1,advis:13,adxl345:[2,5],against:2,aim:11,alia:16,alias:17,all:[0,2,6,7,10,12,13,17],allow:[0,4,12],allow_int:4,along:[13,15],alreadi:[0,16],also:[0,2,5,11,12,13,16,17],altern:[2,5],although:[5,11,15],alwai:[0,7,13,17],among:17,amount:0,ander:8,andrea:[8,12],ani:[0,2,4,8,13,15,17],anoth:12,anymor:[7,13],anywai:13,api:[7,8,10,11,13,17],append:4,appl:16,appleusbftdi:16,appli:2,appropri:[2,5],apt:12,arbitrari:[0,17],archiv:6,argument:[0,4,5,7,8,17],aris:13,arm:0,arrai:[0,2,4,5],ascii:4,ask:17,assert:[2,5],associ:2,attemp:0,attempt:0,attr:12,author:11,automat:[10,12,16],avail:[0,5,6,14],back:12,backend:[6,10,12,15],balanc:0,bandwidth:0,base:[0,1,10,11,13,17],basi:15,baudrat:[0,6],baudrate_toler:0,bcbu:14,bcbus0:14,bcbus1:14,bcbus2:14,bcbus3:14,bcbus4:14,bcbus5:14,bcbus6:14,bcbus7:14,bdbus0:14,bdbus1:14,bdbus2:14,bdbus3:14,bdbus4:14,bdbus5:14,bdbus6:14,bdbus7:14,becaus:0,been:[0,10,11,12,13,15],befor:[0,2,12,17],behav:4,being:[0,10],below:[12,15],benureau:8,best:17,beta:10,between:4,bia:5,big:2,bigendian:2,binari:[2,4,13],bit:[0,1,5,10,14,15,17],bitbang:[0,1,11],bitbang_en:0,bitfield:[0,1,5],bitmask:[0,8],block:[0,5],blot:[8,13],bool:[0,2,4,5,7],boston:13,both:10,bouaziz:8,break_:0,brew:12,bridg:[0,11],brief:12,buffer:[0,2,4],bug:8,bundl:16,bus3:5,bus4:5,bus:[0,2,5,8,14],buse:[0,17],busi:13,bypass:[0,7],bytearrai:4,cach:[0,7],call:[0,5,6,12,17],can:[0,5,6,7,8,10,11,12,13,16,17],candid:[4,7],cannot:[4,10,16],capabl:[0,11,14],care:0,carrier:0,caus:[13,16],chang:[0,5,13,17],charact:[0,4],characterist:0,check:[0,2,12,13,16],checkout:[2,5,15],chip:[0,5],choic:15,chunk:0,chunksiz:0,circumv:0,classmethod:[0,2,7],clear:0,client:6,clock:[0,2,5,11],clone:12,close:[0,1,2,5,10,13],closest:[0,4],code:[4,8,13,15,17],coexist:12,collector:0,com:[0,12,16],come:16,command:[0,2,6,12],commerci:13,common:[4,10],commun:[0,2,5,10,16],compat:[0,13,17],complet:5,complex:13,compli:13,compliant:[10,11],concil:[8,12],condit:[2,13],configur:[0,1,2,5,12,14,16],configure_regist:2,conflict:16,connect:[0,1,2,5,6,7,14,17],consequenti:13,constant:0,constructor:5,contain:[0,5,10,15,16],contract:13,contributor:13,control:[0,1,2,5],controversi:13,convers:4,convert:[4,11],copi:[2,5,12,13],copyright:13,core:[0,7],could:[5,11],count:[0,2,5],cpha:10,cpol:10,cpu:0,creat:[0,12],create_from_url:[0,17],cs0:[5,14],cs1:[5,14],cs2:14,cs3:14,cs4:14,cs_count:5,cs_hold:5,ctrl:[2,5,6],current:[0,2,5,6,11,15,16],custom:0,cycl:[0,2],damag:13,darren:8,data:[0,2,4,5,6,13,16],dave:8,davidwc:8,deal:7,debug:[0,2,5,6,16],decim:4,decod:0,decode_modem_statu:0,decoded:0,decreas:0,dedic:[1,5,6],default_vendor:[7,17],defin:[0,1,6,17],definit:[4,8],delai:[0,8],demonstr:10,depend:[2,5,11,15,17],deprec:[5,15,17],deriv:13,desactivet:5,descript:[0,7,8],descriptor:[0,7],design:0,detail:[13,17],detect:[0,6],devclass:7,devel:[],develop:[10,13],deviat:0,devic:[0,1,2,5,6,7,8,11,12,17],dict:7,differ:0,direct:[0,1,5,6,13,14],directli:[0,2,5],directori:[6,8,10,16],disabl:[0,5],disclaim:13,discrimin:[0,7],dispatch:10,distribut:[12,13],dividor:0,dlharmon:8,document:[0,5,6,8,11,13],doe:[0,13,14,15],done:[0,12],doubl:[0,8],drift:0,drive:[0,1,2,5],driver:[3,10,11,12,16],drop:11,dsr:0,dtr:[0,6],dual:[5,11],dump:4,duplex:[5,10],dyld_library_path:16,dylib:16,dynam:[0,16],each:[0,1,2,5,17],easili:5,eblot:12,ebouaziz:8,editor:8,eeprom:17,effect:12,either:[0,7,13,14],electr:1,emit:[2,16],emmanuel:[8,13],empti:[2,5],emul:10,enabl:[0,4,5,6,10],enable_3phase_clock:0,enable_adaptive_clock:0,enable_drivezero_mod:0,enable_loopback_mod:0,encod:2,end:[0,7],endian:2,endlesscoil:8,endors:13,endpoint:0,engin:0,enough:17,enumer:[0,7,16,17],environm:15,error:[0,1,2,5,7],error_onli:0,errorch:0,etc:12,even:[0,13],event:[0,2,13],eventch:0,everi:0,exact:[0,4],exampl:[0,1,2,5,15,17],exchang:[2,5],exclus:1,exemplari:13,exist:1,exit:6,expand:2,expect:[0,2,5],express:13,extend:5,extens:[6,10,16],extra:5,extract:0,fabien:8,fail:[2,4],fallback:4,fals:[0,2,4,5,7],featur:[0,1,5,6,11,14],feedback:0,feuer:8,fifo:[0,2,5],fifo_s:0,figur:13,file:[6,7,12,13,16],filter:[],find:[0,7,17],find_al:[0,7],first:[2,4,5,6,14],fit:13,fix:8,flash:[5,10],floor:4,flow:0,flowcontrol:0,flowctrl:0,flush:[2,5,7],flush_cach:7,fmt:2,folder:12,follow:[0,2,6,11,13,15,17],forc:[0,2,5],fork:10,form:13,format:[2,4],foundat:13,free:[8,13],freeli:13,freq:5,frequenc:[0,2,5],frequency_max:[0,2,5],fresh:[0,2,5,12],from:[0,2,5,6,7,10,13,16,17],ft2232d:11,ft2232h:[0,6,7,8,10,11,14],ft230x:11,ft232:11,ft232h:[8,10,11,14,17],ft232r:[8,11],ft232x:8,ft4232h:[0,7,8,10,11,14],ftdi:[1,2,3,5,6,7,8,10,11,12,13,16,17],ftdi_devic:[2,5],ftdi_loglevel:[2,5],ftdichip:0,ftdierror:0,ftdifeatureerror:0,ftdimpsseerror:0,full:[0,4,5,6,10],fulli:10,fullmod:6,further:[2,5],garnier:8,gener:[7,13],get:[0,2,5,12],get_cd:0,get_ct:0,get_devic:[0,7],get_dsr:0,get_error_str:0,get_gpio:5,get_identifi:0,get_latency_tim:0,get_port:[2,5],get_ri:0,get_str:7,git:12,github:[2,5,12],give:0,gnu:13,good:13,gpi:5,gpio10:14,gpio11:14,gpio12:14,gpio13:14,gpio14:14,gpio15:14,gpio4:14,gpio5:14,gpio6:14,gpio7:14,gpio8:14,gpio9:14,gpio:[0,2,3,5,10,11],gpio_pin:5,gpiocontrol:1,gpioexcept:1,gpo:5,grant:16,group:12,guid:[12,16],half:[5,10],handl:2,hannesweisbach:8,hard:13,hardwar:0,has:[0,10,12,13,14,15],has_drivezero:0,has_mpss:0,has_wide_port:0,have:[0,11,12,13,15,17],hello:[5,6],help:[6,13,16],helper:[3,7],here:[6,12],hexadecim:4,hexdump:4,hexlin:4,high:[0,1,5],higher:0,hint:8,histor:[8,13],holder:13,hope:13,host:[0,7,8,15,17],how:[4,10],howev:[2,10,13,15],http:[0,12],humm:8,i2c:[0,3,8],i2ccontrol:2,i2cioerror:2,i2cnackerror:2,i2cport:2,i2ctimeouterror:2,ic_nam:0,ident:4,identifi:[0,7,17],idproduct:12,ids:7,idvendor:12,ifac:[0,7],ignor:[0,2],immedi:0,implement:[5,6,7,8,10,11,12,13],impli:13,implic:13,imposs:13,inc:13,incident:13,includ:[10,11,13],increas:[0,2,5],index:[0,4,7,17],indic:[0,16],indirect:13,inform:[0,7],initi:[0,7,13],input:[0,1,2,4,14],instal:[6,8,11,15,16],instanc:[0,2,4,5,6,7,10],instanci:[2,5,7],instead:[0,17],integ:[0,4,17],integr:4,intend:0,interfac:[0,1,2,5,6,7,14,17],intern:0,interrupt:[0,13],invalid:[0,2,16],invok:2,is_connect:1,is_h_seri:0,is_iter:4,is_legaci:0,is_mpss:0,issu:[8,15,16],iter:4,its:[0,2,7,13,17],itself:15,jedec:5,jedec_id:5,joker:7,jtag:[0,1,8,11,14],keep:0,kept:13,kernel:[15,16],kextunload:16,kib:4,kilo:4,kind:[0,7],know:13,known:6,kwarg:[1,2,5],languag:[11,13],larg:0,last:8,latenc:0,latenti:0,later:13,latest:15,launch:12,lawyer:13,layer:[8,10,13],ld_library_path:16,least:0,leav:2,leonard:8,less:[5,13],lesser:13,let:13,level:[0,1,2,5,16],liabil:13,liabl:13,lib:16,libftdi:[0,13],libftdi_:[],librari:[13,15,16],libusb:[15,16],licens:11,like:12,lim_k:4,lim_m:4,limit:[0,4,10,13],line:[0,4,5,6,14],linux:[15,16],list:[0,2,4,5,6,7,13],live:13,lmax:0,lmin:0,load:[0,12,16],loader:16,log:[2,5,6,12],logfil:6,logger:16,logic:[0,1,2,4],longer:15,loopback:0,lose:0,loss:[0,13,16],low:[0,1],lowest:5,lsb:5,maco:[15,16],mai:[0,2,4,5,7,13,15,16,17],main:13,maintain:[0,15],manag:[0,5,8],mani:12,manufactur:17,map:7,marcq:8,mask:2,master:[2,5,11],match:[0,1,7,12,17],materi:13,maverick:16,max:2,maximum:[0,2,5],mbp:10,mccoi:8,mean:5,meaningless:0,mega:4,menu:12,merchant:13,mess:8,messag:6,met:13,method:[2,5,17],mhz:11,mib:4,michael:8,microsoft:12,might:0,mileag:15,millisecond:0,mini:[],minim:10,minimum:0,misc:3,miscellan:3,miscellean:4,miso:[5,14],miss:[12,16],mode:[0,1,2,5,6,8,10,12],modem:0,modem_statu:0,modern:11,modif:13,modifi:13,modul:[2,5,6,10,11,15],more:[0,2,4,5,7,13],mosi:[5,14],most:2,mostli:0,move:16,mpsee:0,mpsse:[0,1,2,10,14],multi:[4,11],multipl:0,must:13,mutual:1,mx25l1606e:5,myproduct:17,myvendor:17,nack:2,name:[0,6,7,10,13,17],nativ:[15,16],nearli:13,need:[0,1,12,17],neglig:13,neither:13,neotion:13,never:[2,5,16],next:[4,15],niku:8,nocach:[0,7],non:0,none:[0,2,5,7],nopeppermint:8,nor:13,note:[0,2,5,14,15,16,17],notic:13,now:[1,5,10,13],number:[0,5,7,17],numer:17,obj:4,object:[4,7,17],obtain:[0,2,5,7],odd:0,offer:10,offici:[12,15,17],offset:[2,5],old:17,onc:[0,2,5,10,12],one:[0,2,5,7,15,17],onli:[0,1,2,5,10,11,14,15,17],open:[0,1,6,7,8,10,13,17],open_bitbang:[0,17],open_bitbang_from_url:[0,17],open_from_url:[0,1,17],open_mpss:[0,17],open_mpsse_from_url:[0,17],openusb:15,oper:4,optimis:8,option:[0,2,5,6,7,13,17],order:[0,7,17],origin:12,other:[0,11,13,15,17],otherwis:[2,13],out:[0,2,5,7,12,13,16],output:[0,1,2,5,7,14],over:[0,10],pair:[0,7],parallel:12,param:0,paramet:[0,1,2,4,5,7,17],pariti:0,pars:[0,4,7],parse_url:7,part:[0,13],particular:13,particularli:17,path:[6,16],payload:[0,16],pdf:0,pdict:7,per:5,perform:[2,5],peripher:12,permiss:[4,13],permit:13,perspect:13,phase:0,pid:[0,7],pid_guidelin:0,pidnam:0,pin:[0,1,5,14],pinout:[2,5,11],pip3:12,place:13,platform:15,pleas:[15,16],plug:12,plugdev:12,plural:4,point:0,poll:[0,2,8],poll_cond:2,poll_modem_statu:0,port:[0,1,2,5,6,7,10,11,14,17],posit:5,possibl:[4,5,10,13],preempt:16,prefer:[0,7,12],prefix:17,pretti:0,pretty_s:4,prettyfi:4,prevent:2,previou:[0,15],previous:[5,7],prior:13,process:[0,12],procur:13,product:[0,7,13],product_id:17,profit:13,program:12,programdata:12,project:[10,13],promot:13,proper:6,proprietari:0,protocol:[0,10,11,17],protocol_ftdi:6,provid:[0,2,5,7,11,13,14,15],publish:13,pull:14,pure:[6,10,11],purge_buff:0,purge_rx_buff:0,purge_tx_buff:0,purpos:[0,13],pwd:6,pyftdi:[0,1,2,4,5,6,7,10,12,13,15,16,17],pyftdi_:[],pyi2cflash:2,pyseri:[6,10,11,12,15],pyserial_:[],pyspiflash:[5,10],pyspiflash_:[],pyterm:6,python3:[2,5,6,12],python:[6,10,11,13,15],pythonpath:[2,5,6],pyusb:[7,8,12,15,16],quad:11,quit:13,rais:[0,2,4],random:[0,7],rang:2,raus:0,raw:16,reach:5,read:[0,1,2,5,6,7,8,10,16],read_buf:5,read_data:0,read_data_byt:0,read_data_get_chunks:0,read_data_set_chunks:0,read_from:2,read_gpio:5,read_pin:0,read_port:1,readabl:4,readi:0,readlen:[2,5],readm:[],realli:13,reason:13,rebuilt:0,receiv:[0,2,5,6,13],recogn:17,recommend:[2,17],reconfigur:[1,2,5],redistribut:13,refer:16,referenc:0,regaddr:2,regist:[2,16],regular:[0,5,6,15],reject:0,relax:2,releas:[2,5,7,13,15],release_devic:7,reli:15,reliabl:[0,7],reload:16,rememb:12,remot:[2,5],remov:[2,8],repeat:2,replac:4,report:[1,5,12,15],repositori:[2,5,12],repres:1,represent:4,reproduc:13,request:[0,2,5],requir:[0,2,6,11,12,13,14],reseerv:5,reserv:[5,13],reset:[0,6],resistor:14,respons:0,resum:5,retain:13,retriev:[0,7],review:8,rfda2125:5,right:13,ring:0,rs232:0,rts:0,rule:12,run:[2,5,6,12,16],runtim:10,rxd:14,saint:8,same:[0,1,7,10,13,16],sampl:[2,5],satisfi:2,satisifi:2,scheme:[0,7,8,11,13],sck:14,sclk:[5,14],script:16,sda:14,seamless:15,sebastian:8,second:[4,6,16],secondari:14,section:[15,16],see:[0,1,2,5,12,13,15,16],select:[0,5,6,7,10,17],selector:[0,1,7],send:[0,2,5,6],sent:[0,5],sep:4,separ:4,sequenc:[0,2,7],seri:[5,10,14,15],serial:[0,1,7,10,11,14,17],serial_for_url:6,serialext:[3,10],sernum:[0,7],servic:13,session:6,set:[0,1,2],set_baudr:0,set_bitmod:0,set_break:0,set_direct:[1,5],set_dtr:0,set_dtr_rt:0,set_dynamic_lat:0,set_error_char:0,set_event_char:0,set_flowctrl:0,set_frequ:[0,5],set_gpio_direct:5,set_latency_tim:0,set_line_properti:0,set_rt:0,setup:12,sever:[0,7,10,16],shall:13,share:[1,13],shell:[],shift_address:2,ship:16,shortcut:0,shorter:0,should:[0,1,2,5,6,7,12,13,14,15,17],show:[6,7],show_devic:7,side:0,signal:[0,5],silent_clock:5,simpl:[6,17],simultan:10,singl:[0,11,17],size:[0,2,4,5],slace:5,slave:[2,5],slot:5,slow:0,smaller:4,soft:8,softwar:[0,10,13,15],sole:17,solut:[0,7,10],some:[0,2,7,12,13],someth:12,sourc:[10,13,15],space:[11,12],special:[0,5,13,17],specif:[0,12,13],specifi:[0,1,2,4,5,7,17],speed:8,spi:[0,1,3,8,11,14],spi_mod:5,spicontrol:5,spigpio:5,spigpioport:5,spiioerror:5,spiport:5,split:0,stage:10,standard:[0,15],start:[0,2,5,6,7,12,16,17],state:0,statu:0,stdout:7,stefan:8,still:10,stop:[0,2,5],stopbit:0,str:[0,1,2,4,5,7],stream:[0,7],strict:13,string:[0,2,4,5,7,17],strip:0,strname:7,struct:2,structur:8,substitut:13,subsystem:12,success:[12,15],successfulli:10,sudo:[12,16],suffix:17,suit:13,support:[0,1,2,5,7,8,11,12,14,15],sure:[2,5,12,13,16,17],synchron:[0,5,10],syntax:[8,17],system:[16,17],take:[4,16],tca9555:2,tck:14,tdi:14,tdo:14,technicalnot:0,tell:[0,2,4,17],templ:13,term:13,termin:[0,2,5,10],test:[0,1,4,6,11,12,15],than:[0,5],thei:14,theori:13,therefor:[11,16,17],thi:[0,1,2,4,5,6,10,12,13,16],those:17,threshold:0,through:[0,10],throughput:0,time:0,timeout:[2,8],timer:0,tini:16,titl:[],tn_100_usb_vid:0,to_bool:4,to_int:4,tobyt:5,togeth:14,too:0,tool:[3,16],tort:13,tracer:0,transact:[2,5],transfer:8,transmiss:5,transpar:10,tri:17,trigger:[0,16],tristat:8,troubleshoot:11,tupl:[0,7],tuppl:0,turbo:5,tweak:[0,2],two:[0,2,14,17],txd:14,type:[0,1,2,4,5,7],typic:12,uart:[0,3,8,11,14],udev:[12,16],under:[10,13],understand:13,uninstal:16,uniqu:0,unit:[0,4],unload:16,unplug:12,unspecifi:0,updat:[1,8,17],uphi:16,uppercas:0,url:[0,1,2,5,6,7,8,11],urlstr:7,usa:13,usag:0,usb:[0,3,8,11,12],usb_dev:7,usbtool:3,usbtoolserror:7,use:[0,1,2,4,5,6,7,10,12,13,16,17],used:[0,2,5,6,7,10,11,12,13,14],useful:[0,2,13,16,17],useless:8,user:[7,11,12,15,16],uses:[15,16],using:[5,12,15,16,17],usual:16,valid:[7,15],validate_address:2,validate_mpss:0,valu:[0,1,2,4,5,17],valueerror:[0,4],vari:15,vcom:16,vdict:7,vendor:[0,7],vendor_id:17,veri:0,version:[13,15],viannei:8,vid:[0,7],vidnam:0,virtual:16,vps:[0,7],wai:[12,13,16,17],want:[12,16,17],warranti:13,watch:2,well:6,what:[2,13],whatev:13,when:[0,2,4,7],whenev:16,where:[0,1,16,17],whereas:13,whether:[0,1,2,4,5,13],which:[0,1,5,13,15,17],wich:5,wide:[0,5],width:2,win32:12,window:[8,15],wire:[2,5],without:[0,2,13,17],work:15,workaround:0,world:[5,6],wrapper:0,write:[0,1,2,5,6,8,10,13],write_buf:5,write_data:0,write_data_get_chunks:0,write_data_set_chunks:0,write_gpio:5,write_port:1,write_to:2,written:13,www:0,x00:2,x01:5,x02:5,x03:5,xor:4,year:10,yet:[0,6,10],you:[1,12,13,15,16,17],your:[12,13,15,17],yourself:13,zadig:[],zero:[0,2,5]},titles:["<code class=\"docutils literal\"><span class=\"pre\">ftdi</span></code> - FTDI driver","<code class=\"docutils literal\"><span class=\"pre\">gpio</span></code> - GPIO API","<code class=\"docutils literal\"><span class=\"pre\">i2c</span></code> - I<sup>2</sup>C API","API documentation","<code class=\"docutils literal\"><span class=\"pre\">misc</span></code> - Miscellaneous helpers","<code class=\"docutils literal\"><span class=\"pre\">spi</span></code> - SPI API","<code class=\"docutils literal\"><span class=\"pre\">serialext</span></code> - UART API","<code class=\"docutils literal\"><span class=\"pre\">usbtools</span></code> - USB tools","Authors","&lt;no title&gt;","Features","PyFtdi","Installation","Licenses","FTDI device pinout","Requirements","Troubleshooting","URL Scheme"],titleterms:{"class":[0,1,2,5,7],"function":4,IDs:17,The:16,access:16,api:[1,2,3,5,6],author:8,avail:16,backend:16,capitan:16,common:16,commun:[],contributor:8,custom:17,data:[],debian:12,deni:16,depend:12,detail:11,devel:12,develop:[8,15],devic:[10,14,16],document:3,driver:0,duplex:[],error:16,exampl:6,except:[0,1,2,5,7],extra:[],featur:10,filter:12,flash:[],from:12,ftdi:[0,14],full:[],goal:11,gpio:1,half:[],has:16,helper:4,homebrew:12,i2c:[2,10],initialis:16,instal:12,insuffici:16,jtag:10,langid:16,lgpl:13,libusb:12,licens:13,linux:12,log:16,maco:12,main:8,master:10,messag:16,mini:6,misc:4,miscellan:4,mit:13,mode:[],nativ:12,open:16,overview:11,permiss:16,pid:17,pinout:14,pip:12,port:16,primari:11,product:17,pyftdi:11,python:12,quickstart:[1,2,5,6],remot:[],requir:15,scheme:17,serial:[6,16],serialexcept:16,serialext:6,serialutil:16,slow:16,sourc:12,spi:[5,10],statu:10,support:[10,17],termin:6,test:[2,5],tool:7,troubleshoot:16,uart:[6,10],ubuntu:12,unabl:16,url:17,usag:6,usb:[7,16,17],usbtool:7,using:[],vendor:17,vid:17,window:12,zadig:12}})