let kicks = s("\
  <\
    [[bd bd] ~ ~ ~           bd ~ ~ ~        ]\
    [[bd bd] ~ ~ [[bd bd] ~] ~ ~ ~ ~        ]\
    [[bd bd] ~ ~ [~ ~ ~ bd] bd ~ ~ ~        ]\
  >\
").bank("tr808")
  .slow(2)



$:
stack(

  kicks,
s("[bd <hh oh oh>]*4").bank("tr909").dec(.32 )
  ,
  
note("c2 <eb2 <g2 c3>>".fast(4))
.sound("<sawtooth square triangle sine>"), 



  )