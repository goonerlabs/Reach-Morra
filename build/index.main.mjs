// Automatically generated with Reach 0.1.11 (6e495417)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (6e495417)';
export const _backendVersion = 18;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Digest;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1, ctc1],
      5: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1],
      7: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1],
      9: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc2, ctc2, ctc1, ctc1, ctc1]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Null;
  const ctc4 = stdlib.T_Address;
  
  
  const v361 = stdlib.protect(ctc0, interact.deadline, 'for Alice\'s interact field deadline');
  const v362 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const txn1 = await (ctc.sendrecv({
    args: [v362, v361],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:64:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v362, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
      
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v378 = stdlib.add(v368, v367);
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
  ;
  const v378 = stdlib.add(v368, v367);
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: ['time', v378],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v365, v366, v367, v378],
      evt_cnt: 0,
      funcNum: 2,
      lct: v368,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
    ;
    ;
    stdlib.protect(ctc3, await interact.informTimeout(), {
      at: './index.rsh:56:27:application',
      fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:70:63:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Alice'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
    const v386 = stdlib.add(v366, v366);
    ;
    let v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v388 = v383;
    let v395 = v386;
    
    while (await (async () => {
      const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v403;})()) {
      const v410 = stdlib.add(v388, v367);
      const v414 = stdlib.protect(ctc0, await interact.getGuess(), {
        at: './index.rsh:77:44:application',
        fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'getGuess',
        who: 'Alice'
        });
      const v415 = stdlib.protect(ctc0, await interact.getHand(), {
        at: './index.rsh:78:42:application',
        fs: ['at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'getHand',
        who: 'Alice'
        });
      const v416 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:79:64:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v417 = stdlib.digest(ctc1, [v416, v415]);
      const v419 = stdlib.protect(ctc0, await interact.random(), {
        at: 'reach standard library:64:31:application',
        fs: ['at ./index.rsh:80:66:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:76:15:application call to [unknown function] (defined at: ./index.rsh:76:19:function exp)'],
        msg: 'random',
        who: 'Alice'
        });
      const v420 = stdlib.digest(ctc1, [v419, v414]);
      
      const txn3 = await (ctc.sendrecv({
        args: [v365, v366, v367, v382, v395, v410, v417, v420],
        evt_cnt: 2,
        funcNum: 4,
        lct: v388,
        onlyIf: true,
        out_tys: [ctc2, ctc2],
        pay: [stdlib.checkedBigNumberify('./index.rsh:85:11:decimal', stdlib.UInt_max, '0'), []],
        sim_p: (async (txn3) => {
          const sim_r = { txns: [], mapRefs: [], maps: [] };
          let sim_txn_ctr = stdlib.UInt_max;
          const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
          
          
          const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn3;
          
          ;
          const v434 = stdlib.add(v425, v367);
          sim_r.isHalt = false;
          
          return sim_r;
          }),
        soloSend: true,
        timeoutAt: ['time', v410],
        tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0, ctc2, ctc2],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v410],
          evt_cnt: 0,
          funcNum: 5,
          lct: v388,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn4;
        ;
        const v515 = stdlib.addressEq(v365, v512);
        const v516 = stdlib.addressEq(v382, v512);
        const v517 = v515 ? true : v516;
        stdlib.assert(v517, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:85:99:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Alice'
          });
        ;
        stdlib.protect(ctc3, await interact.informTimeout(), {
          at: './index.rsh:56:27:application',
          fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:85:99:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Alice'
          });
        
        return;
        
        }
      else {
        const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn3;
        ;
        const v427 = stdlib.addressEq(v365, v422);
        stdlib.assert(v427, {
          at: './index.rsh:85:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Alice'
          });
        const v434 = stdlib.add(v425, v367);
        const txn4 = await (ctc.recv({
          didSend: false,
          evt_cnt: 2,
          funcNum: 6,
          out_tys: [ctc0, ctc0],
          timeoutAt: ['time', v434],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v434],
            evt_cnt: 0,
            funcNum: 7,
            lct: v425,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v365,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn5;
          ;
          const v497 = stdlib.addressEq(v365, v494);
          const v498 = stdlib.addressEq(v382, v494);
          const v499 = v497 ? true : v498;
          stdlib.assert(v499, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:94:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Alice'
            });
          ;
          stdlib.protect(ctc3, await interact.informTimeout(), {
            at: './index.rsh:56:27:application',
            fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:94:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Alice'
            });
          
          return;
          
          }
        else {
          const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn4;
          ;
          const v445 = stdlib.addressEq(v382, v440);
          stdlib.assert(v445, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Alice'
            });
          const v452 = stdlib.add(v443, v367);
          const txn5 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452, v415, v416, v414, v419],
            evt_cnt: 4,
            funcNum: 8,
            lct: v443,
            onlyIf: true,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            pay: [stdlib.checkedBigNumberify('./index.rsh:103:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn5;
              
              ;
              const v468 = stdlib.eq(v459, v441);
              const v469 = stdlib.add(v457, v442);
              const v470 = stdlib.eq(v459, v469);
              const v472 = stdlib.eq(v441, v469);
              const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:10:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:55:decimal', stdlib.UInt_max, '0');
              const v474 = v470 ? stdlib.checkedBigNumberify('./index.rsh:9:57:decimal', stdlib.UInt_max, '1') : v473;
              const v475 = v468 ? stdlib.checkedBigNumberify('./index.rsh:8:43:decimal', stdlib.UInt_max, '0') : v474;
              const cv387 = v475;
              const cv388 = v461;
              const cv395 = v395;
              
              await (async () => {
                const v387 = cv387;
                const v388 = cv388;
                const v395 = cv395;
                
                if (await (async () => {
                  const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
                  
                  return v403;})()) {
                  const v410 = stdlib.add(v388, v367);
                  sim_r.isHalt = false;
                  }
                else {
                  const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:111:41:decimal', stdlib.UInt_max, '1'));
                  const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
                  const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
                  const v533 = v530 ? v531 : v532;
                  const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '0')];
                  const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '1')];
                  const v536 = stdlib.mul(v534, v366);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v365,
                    tok: undefined /* Nothing */
                    });
                  const v541 = stdlib.mul(v535, v366);
                  sim_r.txns.push({
                    kind: 'from',
                    to: v382,
                    tok: undefined /* Nothing */
                    });
                  sim_r.txns.push({
                    kind: 'halt',
                    tok: undefined /* Nothing */
                    })
                  sim_r.isHalt = true;
                  }})();
              return sim_r;
              }),
            soloSend: true,
            timeoutAt: ['time', v452],
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0, ctc0],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452],
              evt_cnt: 0,
              funcNum: 9,
              lct: v443,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v382,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn6;
            ;
            const v479 = stdlib.addressEq(v365, v476);
            const v480 = stdlib.addressEq(v382, v476);
            const v481 = v479 ? true : v480;
            stdlib.assert(v481, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:103:118:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Alice'
              });
            ;
            stdlib.protect(ctc3, await interact.informTimeout(), {
              at: './index.rsh:56:27:application',
              fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:103:118:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Alice'
              });
            
            return;
            
            }
          else {
            const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn5;
            ;
            const v463 = stdlib.addressEq(v365, v456);
            stdlib.assert(v463, {
              at: './index.rsh:103:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Alice'
              });
            const v464 = stdlib.digest(ctc1, [v458, v457]);
            const v465 = stdlib.digestEq(v423, v464);
            stdlib.assert(v465, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v466 = stdlib.digest(ctc1, [v460, v459]);
            const v467 = stdlib.digestEq(v424, v466);
            stdlib.assert(v467, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:105:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Alice'
              });
            const v468 = stdlib.eq(v459, v441);
            const v469 = stdlib.add(v457, v442);
            const v470 = stdlib.eq(v459, v469);
            const v472 = stdlib.eq(v441, v469);
            const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:10:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:55:decimal', stdlib.UInt_max, '0');
            const v474 = v470 ? stdlib.checkedBigNumberify('./index.rsh:9:57:decimal', stdlib.UInt_max, '1') : v473;
            const v475 = v468 ? stdlib.checkedBigNumberify('./index.rsh:8:43:decimal', stdlib.UInt_max, '0') : v474;
            const cv387 = v475;
            const cv388 = v461;
            const cv395 = v395;
            
            v387 = cv387;
            v388 = cv388;
            v395 = cv395;
            
            continue;}
          
          }
        
        }
      
      }
    const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:111:41:decimal', stdlib.UInt_max, '1'));
    const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v533 = v530 ? v531 : v532;
    const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '0')];
    const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '1')];
    const v536 = stdlib.mul(v534, v366);
    ;
    const v541 = stdlib.mul(v535, v366);
    ;
    stdlib.protect(ctc3, await interact.seeOutcome(v387), {
      at: './index.rsh:118:23:application',
      fs: ['at ./index.rsh:117:7:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Alice'
      });
    
    return;
    }
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Digest;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v366, v367], secs: v369, time: v368, didSend: v79, from: v365 } = txn1;
  ;
  const v378 = stdlib.add(v368, v367);
  stdlib.protect(ctc1, await interact.acceptWager(v366), {
    at: './index.rsh:68:25:application',
    fs: ['at ./index.rsh:67:11:application call to [unknown function] (defined at: ./index.rsh:67:15:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v365, v366, v367, v378],
    evt_cnt: 0,
    funcNum: 1,
    lct: v368,
    onlyIf: true,
    out_tys: [],
    pay: [v366, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
      
      const v386 = stdlib.add(v366, v366);
      sim_r.txns.push({
        amt: v366,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      const v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v388 = v383;
      const v395 = v386;
      
      if (await (async () => {
        const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v403;})()) {
        const v410 = stdlib.add(v388, v367);
        sim_r.isHalt = false;
        }
      else {
        const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:111:41:decimal', stdlib.UInt_max, '1'));
        const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
        const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
        const v533 = v530 ? v531 : v532;
        const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '0')];
        const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '1')];
        const v536 = stdlib.mul(v534, v366);
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        const v541 = stdlib.mul(v535, v366);
        sim_r.txns.push({
          kind: 'from',
          to: v382,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: ['time', v378],
    tys: [ctc4, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  if (txn2.didTimeout) {
    const txn3 = await (ctc.sendrecv({
      args: [v365, v366, v367, v378],
      evt_cnt: 0,
      funcNum: 2,
      lct: v368,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
        
        ;
        sim_r.txns.push({
          kind: 'from',
          to: v365,
          tok: undefined /* Nothing */
          });
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        
        return sim_r;
        }),
      soloSend: false,
      timeoutAt: undefined /* mto */,
      tys: [ctc4, ctc0, ctc0, ctc0],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v554, time: v553, didSend: v300, from: v552 } = txn3;
    ;
    ;
    stdlib.protect(ctc1, await interact.informTimeout(), {
      at: './index.rsh:56:27:application',
      fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:70:63:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
      msg: 'informTimeout',
      who: 'Bob'
      });
    
    return;
    
    }
  else {
    const {data: [], secs: v384, time: v383, didSend: v88, from: v382 } = txn2;
    const v386 = stdlib.add(v366, v366);
    ;
    let v387 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
    let v388 = v383;
    let v395 = v386;
    
    while (await (async () => {
      const v403 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
      
      return v403;})()) {
      const v410 = stdlib.add(v388, v367);
      const txn3 = await (ctc.recv({
        didSend: false,
        evt_cnt: 2,
        funcNum: 4,
        out_tys: [ctc2, ctc2],
        timeoutAt: ['time', v410],
        waitIfNotPresent: false
        }));
      if (txn3.didTimeout) {
        const txn4 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v410],
          evt_cnt: 0,
          funcNum: 5,
          lct: v388,
          onlyIf: true,
          out_tys: [],
          pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn4;
            
            ;
            sim_r.txns.push({
              kind: 'from',
              to: v382,
              tok: undefined /* Nothing */
              });
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            
            return sim_r;
            }),
          soloSend: false,
          timeoutAt: undefined /* mto */,
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        const {data: [], secs: v514, time: v513, didSend: v247, from: v512 } = txn4;
        ;
        const v515 = stdlib.addressEq(v365, v512);
        const v516 = stdlib.addressEq(v382, v512);
        const v517 = v515 ? true : v516;
        stdlib.assert(v517, {
          at: 'reach standard library:200:11:dot',
          fs: ['at ./index.rsh:85:99:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'sender correct',
          who: 'Bob'
          });
        ;
        stdlib.protect(ctc1, await interact.informTimeout(), {
          at: './index.rsh:56:27:application',
          fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:85:99:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
          msg: 'informTimeout',
          who: 'Bob'
          });
        
        return;
        
        }
      else {
        const {data: [v423, v424], secs: v426, time: v425, didSend: v120, from: v422 } = txn3;
        ;
        const v427 = stdlib.addressEq(v365, v422);
        stdlib.assert(v427, {
          at: './index.rsh:85:11:dot',
          fs: [],
          msg: 'sender correct',
          who: 'Bob'
          });
        const v434 = stdlib.add(v425, v367);
        const v438 = stdlib.protect(ctc0, await interact.getGuess(), {
          at: './index.rsh:91:52:application',
          fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)'],
          msg: 'getGuess',
          who: 'Bob'
          });
        const v439 = stdlib.protect(ctc0, await interact.getHand(), {
          at: './index.rsh:92:50:application',
          fs: ['at ./index.rsh:90:13:application call to [unknown function] (defined at: ./index.rsh:90:17:function exp)'],
          msg: 'getHand',
          who: 'Bob'
          });
        
        const txn4 = await (ctc.sendrecv({
          args: [v365, v366, v367, v382, v395, v423, v424, v434, v438, v439],
          evt_cnt: 2,
          funcNum: 6,
          lct: v425,
          onlyIf: true,
          out_tys: [ctc0, ctc0],
          pay: [stdlib.checkedBigNumberify('./index.rsh:94:9:decimal', stdlib.UInt_max, '0'), []],
          sim_p: (async (txn4) => {
            const sim_r = { txns: [], mapRefs: [], maps: [] };
            let sim_txn_ctr = stdlib.UInt_max;
            const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
            
            
            const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn4;
            
            ;
            const v452 = stdlib.add(v443, v367);
            sim_r.isHalt = false;
            
            return sim_r;
            }),
          soloSend: true,
          timeoutAt: ['time', v434],
          tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
          waitIfNotPresent: false
          }));
        if (txn4.didTimeout) {
          const txn5 = await (ctc.sendrecv({
            args: [v365, v366, v367, v382, v395, v423, v424, v434],
            evt_cnt: 0,
            funcNum: 7,
            lct: v425,
            onlyIf: true,
            out_tys: [],
            pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
            sim_p: (async (txn5) => {
              const sim_r = { txns: [], mapRefs: [], maps: [] };
              let sim_txn_ctr = stdlib.UInt_max;
              const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
              
              
              const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn5;
              
              ;
              sim_r.txns.push({
                kind: 'from',
                to: v365,
                tok: undefined /* Nothing */
                });
              sim_r.txns.push({
                kind: 'halt',
                tok: undefined /* Nothing */
                })
              sim_r.isHalt = true;
              
              return sim_r;
              }),
            soloSend: false,
            timeoutAt: undefined /* mto */,
            tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0],
            waitIfNotPresent: false
            }));
          const {data: [], secs: v496, time: v495, didSend: v213, from: v494 } = txn5;
          ;
          const v497 = stdlib.addressEq(v365, v494);
          const v498 = stdlib.addressEq(v382, v494);
          const v499 = v497 ? true : v498;
          stdlib.assert(v499, {
            at: 'reach standard library:200:11:dot',
            fs: ['at ./index.rsh:94:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'sender correct',
            who: 'Bob'
            });
          ;
          stdlib.protect(ctc1, await interact.informTimeout(), {
            at: './index.rsh:56:27:application',
            fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:94:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
            msg: 'informTimeout',
            who: 'Bob'
            });
          
          return;
          
          }
        else {
          const {data: [v441, v442], secs: v444, time: v443, didSend: v132, from: v440 } = txn4;
          ;
          const v445 = stdlib.addressEq(v382, v440);
          stdlib.assert(v445, {
            at: './index.rsh:94:9:dot',
            fs: [],
            msg: 'sender correct',
            who: 'Bob'
            });
          const v452 = stdlib.add(v443, v367);
          const txn5 = await (ctc.recv({
            didSend: false,
            evt_cnt: 4,
            funcNum: 8,
            out_tys: [ctc0, ctc0, ctc0, ctc0],
            timeoutAt: ['time', v452],
            waitIfNotPresent: false
            }));
          if (txn5.didTimeout) {
            const txn6 = await (ctc.sendrecv({
              args: [v365, v366, v367, v382, v395, v423, v424, v441, v442, v452],
              evt_cnt: 0,
              funcNum: 9,
              lct: v443,
              onlyIf: true,
              out_tys: [],
              pay: [stdlib.checkedBigNumberify('reach standard library:200:11:decimal', stdlib.UInt_max, '0'), []],
              sim_p: (async (txn6) => {
                const sim_r = { txns: [], mapRefs: [], maps: [] };
                let sim_txn_ctr = stdlib.UInt_max;
                const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
                
                
                const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn6;
                
                ;
                sim_r.txns.push({
                  kind: 'from',
                  to: v382,
                  tok: undefined /* Nothing */
                  });
                sim_r.txns.push({
                  kind: 'halt',
                  tok: undefined /* Nothing */
                  })
                sim_r.isHalt = true;
                
                return sim_r;
                }),
              soloSend: false,
              timeoutAt: undefined /* mto */,
              tys: [ctc4, ctc0, ctc0, ctc4, ctc0, ctc2, ctc2, ctc0, ctc0, ctc0],
              waitIfNotPresent: false
              }));
            const {data: [], secs: v478, time: v477, didSend: v179, from: v476 } = txn6;
            ;
            const v479 = stdlib.addressEq(v365, v476);
            const v480 = stdlib.addressEq(v382, v476);
            const v481 = v479 ? true : v480;
            stdlib.assert(v481, {
              at: 'reach standard library:200:11:dot',
              fs: ['at ./index.rsh:103:118:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'sender correct',
              who: 'Bob'
              });
            ;
            stdlib.protect(ctc1, await interact.informTimeout(), {
              at: './index.rsh:56:27:application',
              fs: ['at ./index.rsh:55:7:application call to [unknown function] (defined at: ./index.rsh:55:25:function exp)', 'at reach standard library:203:8:application call to "after" (defined at: ./index.rsh:54:27:function exp)', 'at ./index.rsh:103:118:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
              msg: 'informTimeout',
              who: 'Bob'
              });
            
            return;
            
            }
          else {
            const {data: [v457, v458, v459, v460], secs: v462, time: v461, didSend: v144, from: v456 } = txn5;
            ;
            const v463 = stdlib.addressEq(v365, v456);
            stdlib.assert(v463, {
              at: './index.rsh:103:11:dot',
              fs: [],
              msg: 'sender correct',
              who: 'Bob'
              });
            const v464 = stdlib.digest(ctc3, [v458, v457]);
            const v465 = stdlib.digestEq(v423, v464);
            stdlib.assert(v465, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:104:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v466 = stdlib.digest(ctc3, [v460, v459]);
            const v467 = stdlib.digestEq(v424, v466);
            stdlib.assert(v467, {
              at: 'reach standard library:69:17:application',
              fs: ['at ./index.rsh:105:20:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
              msg: null,
              who: 'Bob'
              });
            const v468 = stdlib.eq(v459, v441);
            const v469 = stdlib.add(v457, v442);
            const v470 = stdlib.eq(v459, v469);
            const v472 = stdlib.eq(v441, v469);
            const v473 = v472 ? stdlib.checkedBigNumberify('./index.rsh:10:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:11:55:decimal', stdlib.UInt_max, '0');
            const v474 = v470 ? stdlib.checkedBigNumberify('./index.rsh:9:57:decimal', stdlib.UInt_max, '1') : v473;
            const v475 = v468 ? stdlib.checkedBigNumberify('./index.rsh:8:43:decimal', stdlib.UInt_max, '0') : v474;
            const cv387 = v475;
            const cv388 = v461;
            const cv395 = v395;
            
            v387 = cv387;
            v388 = cv388;
            v395 = cv395;
            
            continue;}
          
          }
        
        }
      
      }
    const v530 = stdlib.eq(v387, stdlib.checkedBigNumberify('./index.rsh:111:41:decimal', stdlib.UInt_max, '1'));
    const v531 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
    const v532 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
    const v533 = v530 ? v531 : v532;
    const v534 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '0')];
    const v535 = v533[stdlib.checkedBigNumberify('./index.rsh:111:9:array', stdlib.UInt_max, '1')];
    const v536 = stdlib.mul(v534, v366);
    ;
    const v541 = stdlib.mul(v535, v366);
    ;
    stdlib.protect(ctc1, await interact.seeOutcome(v387), {
      at: './index.rsh:118:23:application',
      fs: ['at ./index.rsh:117:7:application call to [unknown function] (defined at: ./index.rsh:117:25:function exp)'],
      msg: 'seeOutcome',
      who: 'Bob'
      });
    
    return;
    }
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAOAAEIUAUJIAcomAECqAFYMCYDAQABAQAiNQAxGEEFLCpkSSJbNQEkWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0khBAxAAn5JIQcMQAFySSQMQAEZSSEFDEAAViEFEkQhBTQBEkQ0BEkiEkw0AhIRRChkKWRQSTUDVzAgNf+ABKIFZo6wMgY0AyELWw9ENANXACAxABI0/zEAEhFEsSKyATQDJVuyCCOyEDT/sgezQgRESCEFNAESRDQESSISTDQCEhFEKGQpZFBJNQNJVwAgNf8hCVs1/kk1BUlKIls1/SRbNfyBEFs1+4EYWzX6gAR/ojtSNP0WUDT8FlA0+xZQNPoWULAyBjQDIQtbDEQ0/zEAEkQ0A1dYIDT8FjT9FlABEkQ0A1d4IDT6FjT7FlABEkQ0/TQDgaABWwg1+TT/NAMhBls0AyEIWzQDVzAgIiEKNP40+RJNIzT7NPkSTSI0+zT+Ek0yBjQDJVtCAuxIIQc0ARJENARJIhJMNAISEUQoZClkUEk1A1cAIDX/gATiG7OpsDIGNAMhCVsPRDT/MQASNANXMCAxABIRRLEisgE0AyVbsggjshA0/7IHs0IDNUmBBgxAAK5IIQc0ARJENARJIhJMNAISEUQoZClkUEk1A0lKSklXACA1/yEGWzX+IQhbNf1XMCA1/CVbNftXWCA1+ld4IDX5STUFSSJbNfgkWzX3gARKIcv8NPgWUDT3FlCwMgY0AyEJWwxENPwxABJEMgY0/Qg19jT/NP4WUDT9FlA0/FA0+xZQNPpQNPlQNPgWUDT3FlA09hZQKEsBVwB/ZylLAVd/MWdIIQU1ATIGNQJCApxIIQQ0ARJENARJIhJMNAISEUQoZEk1A1cwIDX/gATMmZJcsDIGNAMhDFsPRDQDVwAgMQASNP8xABIRRLEisgE0AyVbsggjshA0/7IHs0ICMEkhCgxAAOBJgQQMQACYSCEENAESRDQESSISTDQCEhFEKGRJNQNJSklXACA1/yEGWzX+IQhbNf1XMCA1/CVbNftJNQVJVwAgNfpXICA1+YAEYF2kKzT6UDT5ULAyBjQDIQxbDEQ0/zEAEkQyBjT9CDX4NP80/hZQNP0WUDT8UDT7FlA0+lA0+VA0+BZQKEsBVwB/ZylLAVd/IWdIIQc1ATIGNQJCAaYhChJEIzQBEkQ0BEkiEkw0AhIRRChkNQOABEGxQE2wMgY0AyENWw9EsSKyATQDIQZbsggjshA0A1cAILIHs0IBSUkjDEAASEgjNAESRDQESSISTDQCEhFEKGRJNQMhBls1/4AEmouRdLAyBjQDIQ1bDEQ0/4gBgTQDVwAgNP80AyEIWzEAIjIGNP9JCEIAX0iBoI0GiAFhIjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/JFs1/oAErNEfwzT/FlA0/hZQsDT/iAExMgY0/gg1/TEANP8WUDT+FlA0/RZQKEsBVwA4Z0gjNQEyBjUCQgC4Nf81/jX9Nfw1+zX6Nfk0/SISQQAvNP40+wg1+DT5NPoWUDT7FlA0/FA0/xZQNPgWUChLAVcAYGdIIQQ1ATIGNQJCAHSAEAAAAAAAAAAAAAAAAAAAAAKAEAAAAAAAAAACAAAAAAAAAAA0/SMSTTX4sSKyATT4Ils0+guyCCOyEDT5sgezsSKyATT4JFs0+guyCCOyEDT8sgezQgAAMRkhBBJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKjQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEDMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 176,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v366",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v367",
                "type": "uint256"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e5",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e6",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e7",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v457",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e8",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e9",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v423",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v424",
                "type": "uint256"
              }
            ],
            "internalType": "struct T11",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T12",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m5",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v441",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v442",
                "type": "uint256"
              }
            ],
            "internalType": "struct T14",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T15",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m6",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m7",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v457",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v458",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v459",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v460",
                "type": "uint256"
              }
            ],
            "internalType": "struct T16",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T17",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m8",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T7",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m9",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162001d7538038062001d7583398101604081905262000026916200024b565b6000808055436003556040805160208082018352928152815133815284518185015284840151805182850152909301516060840152905190917fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f95919081900360800190a16020820151516200009f903414600762000144565b6020808301510151620000b39043620002ab565b81526040805160808082018352600060208084018281528486018381526060808701858152338089528b860180515186525186015184528a5182526001968790554390965588518086019690965292518589015290519084015251828401528451808303909301835260a0909101909352805191926200013a92600292909101906200016e565b505050506200030f565b816200016a5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200017c90620002d2565b90600052602060002090601f016020900481019282620001a05760008555620001eb565b82601f10620001bb57805160ff1916838001178555620001eb565b82800160010185558215620001eb579182015b82811115620001eb578251825591602001919060010190620001ce565b50620001f9929150620001fd565b5090565b5b80821115620001f95760008155600101620001fe565b604080519081016001600160401b03811182821017156200024557634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200025f57600080fd5b6200026962000214565b835181526040601f19830112156200028057600080fd5b6200028a62000214565b60208581015182526040909501518582015293810193909352509092915050565b60008219821115620002cd57634e487b7160e01b600052601160045260246000fd5b500190565b600181811c90821680620002e757607f821691505b602082108114156200030957634e487b7160e01b600052602260045260246000fd5b50919050565b611a56806200031f6000396000f3fe60806040526004361061009a5760003560e01c80638e314769116100615780638e31476914610115578063ab53f2c614610128578063bf2c5b241461014b578063cc923b291461015e578063de73699814610171578063ebdbfdcc1461018457005b80631e93b0f1146100a357806321642639146100c75780632c10a159146100da5780637eea518c146100ed578063832307571461010057005b366100a157005b005b3480156100af57600080fd5b506003545b6040519081526020015b60405180910390f35b6100a16100d5366004611563565b610197565b6100a16100e8366004611586565b6103fd565b6100a16100fb366004611586565b610594565b34801561010c57600080fd5b506001546100b4565b6100a1610123366004611586565b610712565b34801561013457600080fd5b5061013d6108ad565b6040516100be929190611598565b6100a1610159366004611586565b61094a565b6100a161016c3660046115f5565b610ae1565b6100a161017f366004611586565b610db1565b6100a1610192366004611563565b610f0c565b6101a7600760005414601c61117e565b6101c1813515806101ba57506001548235145b601d61117e565b6000808055600280546101d390611607565b80601f01602080910402602001604051908101604052809291908181526020018280546101ff90611607565b801561024c5780601f106102215761010080835404028352916020019161024c565b820191906000526020600020905b81548152906001019060200180831161022f57829003601f168201915b50505050508060200190518101906102649190611690565b905061027c6040518060200160405280600081525090565b61028d8260e001514310601e61117e565b7fb2a03f9306ab783007397921312164b54fbeead1388356342ff3ef55c8552b3f33846040516102be92919061173c565b60405180910390a16102d23415601a61117e565b60608201516102ed906001600160a01b03163314601b61117e565b60408201516102fc9043611783565b81526040805161014081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e08101829052610100810182905261012081019190915282516001600160a01b0390811682526020808501518184015260408086015181850152606080870151909316928401929092526080808601519084015260a0808601519084015260c080860151908401528581013560e084015285820135610100840152835161012084015260096000554360015590516103d29183910161179b565b604051602081830303815290604052600290805190602001906103f69291906113a9565b5050505050565b61040d600160005414600961117e565b6104278135158061042057506001548235145b600a61117e565b60008080556002805461043990611607565b80601f016020809104026020016040519081016040528092919081815260200182805461046590611607565b80156104b25780601f10610487576101008083540402835291602001916104b2565b820191906000526020600020905b81548152906001019060200180831161049557829003601f168201915b50505050508060200190518101906104ca9190611822565b90506104dd81606001514310600b61117e565b7f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f1338360405161050e92919061189b565b60405180910390a161052781602001513414600861117e565b61052f61142d565b815181516001600160a01b03909116905260208083018051835183015260408085015184519091015282513360609091015281830180516000905251439201919091525161057d9080611783565b60208201516040015261058f816111a3565b505050565b6105a4600160005414600d61117e565b6105be813515806105b757506001548235145b600e61117e565b6000808055600280546105d090611607565b80601f01602080910402602001604051908101604052809291908181526020018280546105fc90611607565b80156106495780601f1061061e57610100808354040283529160200191610649565b820191906000526020600020905b81548152906001019060200180831161062c57829003601f168201915b50505050508060200190518101906106619190611822565b90506106758160600151431015600f61117e565b7f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516106a692919061189b565b60405180910390a16106ba3415600c61117e565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f7573d6000803e3d6000fd5b506000808055600181905561070e90600290611486565b5050565b610722600560005414601761117e565b61073c8135158061073557506001548235145b601861117e565b60008080556002805461074e90611607565b80601f016020809104026020016040519081016040528092919081815260200182805461077a90611607565b80156107c75780601f1061079c576101008083540402835291602001916107c7565b820191906000526020600020905b8154815290600101906020018083116107aa57829003601f168201915b50505050508060200190518101906107df91906118d8565b90506107f38160a00151431015601961117e565b7fbe731e9f2a129299a212b8ec3ac324fa99671cd00a5a827cbd3d4fe6d7ad541d338360405161082492919061189b565b60405180910390a16108383415601561117e565b805161086c906001600160a01b031633146108625760608201516001600160a01b03163314610865565b60015b601661117e565b80606001516001600160a01b03166108fc82608001519081150290604051600060405180830381858888f193505050501580156106f7573d6000803e3d6000fd5b6000606060005460028080546108c290611607565b80601f01602080910402602001604051908101604052809291908181526020018280546108ee90611607565b801561093b5780601f106109105761010080835404028352916020019161093b565b820191906000526020600020905b81548152906001019060200180831161091e57829003601f168201915b50505050509050915091509091565b61095a600760005414602161117e565b6109748135158061096d57506001548235145b602261117e565b60008080556002805461098690611607565b80601f01602080910402602001604051908101604052809291908181526020018280546109b290611607565b80156109ff5780601f106109d4576101008083540402835291602001916109ff565b820191906000526020600020905b8154815290600101906020018083116109e257829003601f168201915b5050505050806020019051810190610a179190611690565b9050610a2b8160e00151431015602361117e565b7f3a35e33c7cbe4475e726117e3691b4a75ad6c9b28c29c59a1ef792dd449861bb3383604051610a5c92919061189b565b60405180910390a1610a703415601f61117e565b8051610aa4906001600160a01b03163314610a9a5760608201516001600160a01b03163314610a9d565b60015b602061117e565b805160808201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156106f7573d6000803e3d6000fd5b610af1600960005414602861117e565b610b0b81351580610b0457506001548235145b602961117e565b600080805560028054610b1d90611607565b80601f0160208091040260200160405190810160405280929190818152602001828054610b4990611607565b8015610b965780601f10610b6b57610100808354040283529160200191610b96565b820191906000526020600020905b815481529060010190602001808311610b7957829003601f168201915b5050505050806020019051810190610bae919061196c565b9050610bc66040518060200160405280600081525090565b610bd88261012001514310602a61117e565b604080513381528435602080830191909152850135818301529084013560608083019190915284013560808083019190915284013560a08201527fc7e07aa759791812e0e03fb583c5fbed2f43e8adb4535b4faa695e77e84ea4fe9060c00160405180910390a1610c4b3415602461117e565b8151610c63906001600160a01b03163314602561117e565b60408051610cb091610c8a9190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c8360a0015114602661117e565b604080516080850135602080830191909152606080870135838501528351808403850181529201909252805191012060c0830151610cf09114602761117e565b610100820151610d04906020850135611783565b8152610d0e61142d565b825181516001600160a01b039182169052602080850151835190910152604080850151835190910152606080850151835192169181019190915260e08401519085013514610d83578151606085013514610d7c57815160e084015114610d75576000610d86565b6002610d86565b6001610d86565b60005b60208083018051929092528151439101526080840151905160400152610dab816111a3565b50505050565b610dc1600960005414602d61117e565b610ddb81351580610dd457506001548235145b602e61117e565b600080805560028054610ded90611607565b80601f0160208091040260200160405190810160405280929190818152602001828054610e1990611607565b8015610e665780601f10610e3b57610100808354040283529160200191610e66565b820191906000526020600020905b815481529060010190602001808311610e4957829003601f168201915b5050505050806020019051810190610e7e919061196c565b9050610e93816101200151431015602f61117e565b7f7533cfcbaea81c55f5c15df7ca9474738a32835ebe63ae177376e624bc7df0bd3383604051610ec492919061189b565b60405180910390a1610ed83415602b61117e565b805161086c906001600160a01b03163314610f025760608201516001600160a01b03163314610f05565b60015b602c61117e565b610f1c600560005414601261117e565b610f3681351580610f2f57506001548235145b601361117e565b600080805560028054610f4890611607565b80601f0160208091040260200160405190810160405280929190818152602001828054610f7490611607565b8015610fc15780601f10610f9657610100808354040283529160200191610fc1565b820191906000526020600020905b815481529060010190602001808311610fa457829003601f168201915b5050505050806020019051810190610fd991906118d8565b9050610ff16040518060200160405280600081525090565b6110028260a001514310601461117e565b7fa8815bd11c35a4f9905db53f65c359036789c5fd334917c999c5b2420107265a338460405161103392919061173c565b60405180910390a16110473415601061117e565b815161105f906001600160a01b03163314601161117e565b604082015161106e9043611783565b81526040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a0810182905260c0810182905260e081019190915282516001600160a01b039081168252602080850151818401526040808601518185015260608087015190931692840192909252608080860151908401528581013560a08401528582013560c0840152835160e084015260076000554360015590516103d29183910160006101008201905060018060a01b038084511683526020840151602084015260408401516040840152806060850151166060840152506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015292915050565b8161070e5760405163100960cb60e01b81526004810182905260240160405180910390fd5b6111ab6114c3565b6020820151516112ba5781516040015160208084015101516111cd9190611783565b81526040805160c081018252600080825260208201819052918101829052606081018290526080810182905260a08101919091528251516001600160a01b039081168083528451602090810151818501908152865160409081015181870190815288516060908101518716818901908152858b01518401516080808b019182528b5160a0808d019182526005600055436001558751998a019a909a529651958801959095529251918601919091525190951690830152925191810191909152905160c082015260e00160405160208183030381529060405260029080519060200190610dab9291906113a9565b60208082018051600290819052905160009083018190526040840180519190915251820152820151516001146112f45780604001516112fa565b80602001515b606082018190528251805160209091015191516001600160a01b03909116916108fc916113279190611a01565b6040518115909202916000818181858888f1935050505015801561134f573d6000803e3d6000fd5b508160000151606001516001600160a01b03166108fc8360000151602001518360600151602001516113819190611a01565b6040518115909202916000818181858888f193505050501580156106f7573d6000803e3d6000fd5b8280546113b590611607565b90600052602060002090601f0160209004810192826113d7576000855561141d565b82601f106113f057805160ff191683800117855561141d565b8280016001018555821561141d579182015b8281111561141d578251825591602001919060010190611402565b50611429929150611536565b5090565b6040805160c0810182526000918101828152606082018390526080820183905260a0820192909252908190815260200161148160405180606001604052806000815260200160008152602001600081525090565b905290565b50805461149290611607565b6000825580601f106114a2575050565b601f0160209004906000526020600020908101906114c09190611536565b50565b6040518060800160405280600081526020016114f2604051806040016040528060008152602001600081525090565b8152602001611514604051806040016040528060008152602001600081525090565b8152602001611481604051806040016040528060008152602001600081525090565b5b808211156114295760008155600101611537565b60006060828403121561155d57600080fd5b50919050565b60006060828403121561157557600080fd5b61157f838361154b565b9392505050565b60006040828403121561155d57600080fd5b82815260006020604081840152835180604085015260005b818110156115cc578581018301518582016060015282016115b0565b818111156115de576000606083870101525b50601f01601f191692909201606001949350505050565b600060a0828403121561155d57600080fd5b600181811c9082168061161b57607f821691505b6020821081141561155d57634e487b7160e01b600052602260045260246000fd5b604051610140810167ffffffffffffffff8111828210171561166e57634e487b7160e01b600052604160045260246000fd5b60405290565b80516001600160a01b038116811461168b57600080fd5b919050565b60006101008083850312156116a457600080fd5b6040519081019067ffffffffffffffff821181831017156116d557634e487b7160e01b600052604160045260246000fd5b816040526116e284611674565b8152602084015160208201526040840151604082015261170460608501611674565b60608201526080840151608082015260a084015160a082015260c084015160c082015260e084015160e0820152809250505092915050565b6001600160a01b03831681526080810161157f60208301848035825260208082013590830152604090810135910152565b634e487b7160e01b600052601160045260246000fd5b600082198211156117965761179661176d565b500190565b81516001600160a01b031681526101408101602083015160208301526040830151604083015260608301516117db60608401826001600160a01b03169052565b506080830151608083015260a083015160a083015260c083015160c083015260e083015160e083015261010080840151818401525061012080840151818401525092915050565b60006080828403121561183457600080fd5b6040516080810181811067ffffffffffffffff8211171561186557634e487b7160e01b600052604160045260246000fd5b60405261187183611674565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146118c957600080fd5b80604085015250509392505050565b600060c082840312156118ea57600080fd5b60405160c0810181811067ffffffffffffffff8211171561191b57634e487b7160e01b600052604160045260246000fd5b60405261192783611674565b8152602083015160208201526040830151604082015261194960608401611674565b60608201526080830151608082015260a083015160a08201528091505092915050565b6000610140828403121561197f57600080fd5b61198761163c565b61199083611674565b815260208301516020820152604083015160408201526119b260608401611674565b60608201526080830151608082015260a083015160a082015260c083015160c082015260e083015160e08201526101008084015181830152506101208084015181830152508091505092915050565b6000816000190483118215151615611a1b57611a1b61176d565b50029056fea26469706673582212203c4abc04b15b19b3002d124fa1f9e1de4832b76f48872b56eacad65e3dd30e4e64736f6c634300080c0033`,
  BytecodeLen: 7541,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:65:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:70:63:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:115:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:75:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  6: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:85:99:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  7: {
    at: './index.rsh:86:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  8: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:94:81:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    },
  9: {
    at: './index.rsh:95:13:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  10: {
    at: 'reach standard library:202:11:after expr stmt semicolon',
    fs: ['at ./index.rsh:103:118:application call to "closeTo" (defined at: reach standard library:198:8:function exp)'],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
