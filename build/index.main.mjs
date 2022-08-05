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
      1: [ctc0, ctc1, ctc1, ctc2],
      2: [ctc0, ctc1, ctc1, ctc2, ctc0, ctc1, ctc1]
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
  
  
  const v182 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v185 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:54:50:application',
    fs: ['at ./index.rsh:52:12:application call to [unknown function] (defined at: ./index.rsh:52:16:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  const v186 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:55:38:application',
    fs: ['at ./index.rsh:52:12:application call to [unknown function] (defined at: ./index.rsh:52:16:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  const v187 = stdlib.protect(ctc0, await interact.random(), {
    at: 'reach standard library:64:31:application',
    fs: ['at ./index.rsh:56:52:application call to "makeCommitment" (defined at: reach standard library:63:8:function exp)', 'at ./index.rsh:52:12:application call to [unknown function] (defined at: ./index.rsh:52:16:function exp)'],
    msg: 'random',
    who: 'Alice'
    });
  const v188 = stdlib.digest(ctc1, [v187, v186]);
  
  const txn1 = await (ctc.sendrecv({
    args: [v185, v182, v188],
    evt_cnt: 3,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:59:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0, ctc2],
    pay: [v182, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v85, from: v190 } = txn1;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v85, from: v190 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 1,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v98, from: v202 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v190, v191, v192, v193, v202, v203, v204, v186, v187],
    evt_cnt: 2,
    funcNum: 2,
    lct: v205,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:76:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v212, v213], secs: v215, time: v214, didSend: v108, from: v211 } = txn3;
      
      ;
      const v219 = stdlib.eq(v191, v203);
      const v220 = stdlib.add(v212, v204);
      const v221 = stdlib.eq(v191, v220);
      const v223 = stdlib.eq(v203, v220);
      const v224 = v223 ? stdlib.checkedBigNumberify('./index.rsh:81:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:82:55:decimal', stdlib.UInt_max, '0');
      const v225 = v221 ? stdlib.checkedBigNumberify('./index.rsh:80:57:decimal', stdlib.UInt_max, '1') : v224;
      const v226 = v219 ? stdlib.checkedBigNumberify('./index.rsh:79:44:decimal', stdlib.UInt_max, '0') : v225;
      const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:84:41:decimal', stdlib.UInt_max, '1'));
      const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:85:20:decimal', stdlib.UInt_max, '2'));
      const v229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v231 = v228 ? v229 : v230;
      const v232 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v233 = v227 ? v232 : v231;
      const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '0')];
      const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '1')];
      const v236 = stdlib.mul(v234, v192);
      sim_r.txns.push({
        kind: 'from',
        to: v190,
        tok: undefined /* Nothing */
        });
      const v241 = stdlib.mul(v235, v192);
      sim_r.txns.push({
        kind: 'from',
        to: v202,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc2, ctc4, ctc0, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v212, v213], secs: v215, time: v214, didSend: v108, from: v211 } = txn3;
  ;
  const v216 = stdlib.addressEq(v190, v211);
  stdlib.assert(v216, {
    at: './index.rsh:76:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v217 = stdlib.digest(ctc1, [v213, v212]);
  const v218 = stdlib.digestEq(v193, v217);
  stdlib.assert(v218, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:77:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Alice'
    });
  const v219 = stdlib.eq(v191, v203);
  const v220 = stdlib.add(v212, v204);
  const v221 = stdlib.eq(v191, v220);
  const v223 = stdlib.eq(v203, v220);
  const v224 = v223 ? stdlib.checkedBigNumberify('./index.rsh:81:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:82:55:decimal', stdlib.UInt_max, '0');
  const v225 = v221 ? stdlib.checkedBigNumberify('./index.rsh:80:57:decimal', stdlib.UInt_max, '1') : v224;
  const v226 = v219 ? stdlib.checkedBigNumberify('./index.rsh:79:44:decimal', stdlib.UInt_max, '0') : v225;
  const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:84:41:decimal', stdlib.UInt_max, '1'));
  const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:85:20:decimal', stdlib.UInt_max, '2'));
  const v229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v231 = v228 ? v229 : v230;
  const v232 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v233 = v227 ? v232 : v231;
  const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '0')];
  const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '1')];
  const v236 = stdlib.mul(v234, v192);
  ;
  const v241 = stdlib.mul(v235, v192);
  ;
  stdlib.protect(ctc3, await interact.seeOutcome(v226), {
    at: './index.rsh:93:23:application',
    fs: ['at ./index.rsh:92:7:application call to [unknown function] (defined at: ./index.rsh:92:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Digest;
  const ctc2 = stdlib.T_Null;
  const ctc3 = stdlib.T_Tuple([ctc0, ctc0]);
  const ctc4 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 3,
    funcNum: 0,
    out_tys: [ctc0, ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v191, v192, v193], secs: v195, time: v194, didSend: v85, from: v190 } = txn1;
  ;
  stdlib.protect(ctc2, await interact.acceptWager(v192), {
    at: './index.rsh:65:23:application',
    fs: ['at ./index.rsh:64:10:application call to [unknown function] (defined at: ./index.rsh:64:14:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  const v200 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:66:48:application',
    fs: ['at ./index.rsh:64:10:application call to [unknown function] (defined at: ./index.rsh:64:14:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  const v201 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:67:46:application',
    fs: ['at ./index.rsh:64:10:application call to [unknown function] (defined at: ./index.rsh:64:14:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v190, v191, v192, v193, v200, v201],
    evt_cnt: 2,
    funcNum: 1,
    lct: v194,
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v192, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v203, v204], secs: v206, time: v205, didSend: v98, from: v202 } = txn2;
      
      sim_r.txns.push({
        amt: v192,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4, ctc0, ctc0, ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v203, v204], secs: v206, time: v205, didSend: v98, from: v202 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 2,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v212, v213], secs: v215, time: v214, didSend: v108, from: v211 } = txn3;
  ;
  const v216 = stdlib.addressEq(v190, v211);
  stdlib.assert(v216, {
    at: './index.rsh:76:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v217 = stdlib.digest(ctc3, [v213, v212]);
  const v218 = stdlib.digestEq(v193, v217);
  stdlib.assert(v218, {
    at: 'reach standard library:69:17:application',
    fs: ['at ./index.rsh:77:18:application call to "checkCommitment" (defined at: reach standard library:68:8:function exp)'],
    msg: null,
    who: 'Bob'
    });
  const v219 = stdlib.eq(v191, v203);
  const v220 = stdlib.add(v212, v204);
  const v221 = stdlib.eq(v191, v220);
  const v223 = stdlib.eq(v203, v220);
  const v224 = v223 ? stdlib.checkedBigNumberify('./index.rsh:81:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:82:55:decimal', stdlib.UInt_max, '0');
  const v225 = v221 ? stdlib.checkedBigNumberify('./index.rsh:80:57:decimal', stdlib.UInt_max, '1') : v224;
  const v226 = v219 ? stdlib.checkedBigNumberify('./index.rsh:79:44:decimal', stdlib.UInt_max, '0') : v225;
  const v227 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:84:41:decimal', stdlib.UInt_max, '1'));
  const v228 = stdlib.eq(v226, stdlib.checkedBigNumberify('./index.rsh:85:20:decimal', stdlib.UInt_max, '2'));
  const v229 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v230 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v231 = v228 ? v229 : v230;
  const v232 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v233 = v227 ? v232 : v231;
  const v234 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '0')];
  const v235 = v233[stdlib.checkedBigNumberify('./index.rsh:84:9:array', stdlib.UInt_max, '1')];
  const v236 = stdlib.mul(v234, v192);
  ;
  const v241 = stdlib.mul(v235, v192);
  ;
  stdlib.protect(ctc2, await interact.seeOutcome(v226), {
    at: './index.rsh:93:23:application',
    fs: ['at ./index.rsh:92:7:application call to [unknown function] (defined at: ./index.rsh:92:25:function exp)'],
    msg: 'seeOutcome',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAGAAECCCAoJgMBAAABASI1ADEYQQJVKWRJIls1ASVbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSSMMQAF4SSQMQAD1JBJEJDQBEkQ0BEkiEkw0AhIRRChkKmRQSTUDSUpXACA1/yEEWzX+IQVbNf2BcFs1/Ek1BUkiWzX7JVs1+oAE8y0KDDT7FlA0+hZQsDT/MQASRDQDVzAgNPoWNPsWUAESRDT7NAOBeFsINfkiJDT8NPkSTSM0/jT5Ek0iNP40/BJNNfiAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+CQSTYAQAAAAAAAAAAIAAAAAAAAAADT4IxJNNfexIrIBNPciWzT9C7III7IQNP+yB7OxIrIBNPclWzT9C7III7IQNANXUCCyB7NCAN1IIzQBEkQ0BEkiEkw0AhIRRChkSTUDSUpXACA1/yEEWzX+IQVbNf1XMCA1/Ek1BUkiWzX7JVs1+oAEx7YK1TT7FlA0+hZQsDT9iAD/NP80/hZQNP0WUDT8UDEAUDT7FlA0+hZQKEsBVwB/ZypLAVd/AWdIJDUBMgY1AkIAfEiBoI0GiADGIjQBEkQ0BEkiEkw0AhIRREk1BUlJIls1/yVbNf5XECA1/YAEFi0oOzT/FlA0/hZQNP1QsDT+iACNMQA0/xZQNP4WUDT9UChLAVcAUGdIIzUBMgY1AkIAHDEZgQUSRLEisgEisggjshAyCbIJMgqyB7NCAAUxGSISRCk0ARY0AhZQZzQGQQAKgAQVH3x1NAdQsDQASSMIMgQSRDEWEkQjQzEZIhJEQv/fIjE0EkSBAzE1EkQiMTYSRCIxNxJEIjUBIjUCQv+uNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 2,
  stateSize: 128,
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
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
                "name": "v191",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v192",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v193",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v203",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v204",
                "type": "uint256"
              }
            ],
            "internalType": "struct T4",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T5",
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
            "components": [
              {
                "internalType": "uint256",
                "name": "v212",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v213",
                "type": "uint256"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000e4c38038062000e4c83398101604081905262000026916200025e565b600080554360035560408051338152825160208083019190915280840151805183850152908101516060830152820151608082015290517fe875e0d974175d3036d72bf8b57156a0f70f8e5f5279acd8e22aae589e0748e69181900360a00190a160208082015101516200009e903414600762000157565b620000d3604051806080016040528060006001600160a01b031681526020016000815260200160008152602001600081525090565b338082526020838101805151828501908152815183015160408087019182529251830151606080880191825260016000819055439055845180870197909752925186850152905191850191909152516080808501919091528151808503909101815260a0909301905281516200014e92600292019062000181565b50505062000332565b816200017d5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546200018f90620002f5565b90600052602060002090601f016020900481019282620001b35760008555620001fe565b82601f10620001ce57805160ff1916838001178555620001fe565b82800160010185558215620001fe579182015b82811115620001fe578251825591602001919060010190620001e1565b506200020c92915062000210565b5090565b5b808211156200020c576000815560010162000211565b604051606081016001600160401b03811182821017156200025857634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360808112156200027257600080fd5b604080519081016001600160401b0381118282101715620002a357634e487b7160e01b600052604160045260246000fd5b604052835181526060601f1983011215620002bd57600080fd5b620002c762000227565b9150602084015182526040840151602083015260608401516040830152816020820152809250505092915050565b600181811c908216806200030a57607f821691505b602082108114156200032c57634e487b7160e01b600052602260045260246000fd5b50919050565b610b0a80620003426000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f11461005457806342ae229d14610078578063832307571461008b5780639014596a146100a0578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461086e565b6100d6565b34801561009757600080fd5b50600154610065565b6100526100ae36600461086e565b610316565b3480156100bf57600080fd5b506100c8610619565b60405161006f929190610891565b6100e660016000541460096106b6565b610100813515806100f957506001548235145b600a6106b6565b600080805560028054610112906108ee565b80601f016020809104026020016040519081016040528092919081815260200182805461013e906108ee565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a3919061093f565b90507f28b3acbd60e1c88f58f9afc3e0ee7cd853273307e47898c088b04f6be7fbcd9333836040516101d69291906109b8565b60405180910390a16101ef8160400151341460086106b6565b6102416040518060e0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152606080850151908401523360808401528482013560a08401528481013560c0840152600260005543600155516102ec9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151908301526080808401519091169082015260a0828101519082015260c0918201519181019190915260e00190565b604051602081830303815290604052600290805190602001906103109291906106df565b50505050565b610326600260005414600e6106b6565b6103408135158061033957506001548235145b600f6106b6565b600080805560028054610352906108ee565b80601f016020809104026020016040519081016040528092919081815260200182805461037e906108ee565b80156103cb5780601f106103a0576101008083540402835291602001916103cb565b820191906000526020600020905b8154815290600101906020018083116103ae57829003601f168201915b50505050508060200190518101906103e391906109e9565b90506103ed610763565b7feade97c60783e4c8b7590ebdcad0dcf3d731471c98f3f06328d9701c9d0e1969338460405161041e9291906109b8565b60405180910390a16104323415600b6106b6565b815161044a906001600160a01b03163314600c6106b6565b60408051610497916104719190860135906020808801359101918252602082015260400190565b6040516020818303038152906040528051906020012060001c836060015114600d6106b6565b60c08201516104aa906020850135610a9d565b815260a08201516020830151146104e85780516020830151146104e157805160a0830151146104da5760006104eb565b60026104eb565b60016104eb565b60005b6020808301918252604083018051600090819052905160029083018190526060850180516001908190529051840181905260808601805192909252905190920152905114610553576002816020015114610549578060600151610559565b8060400151610559565b80608001515b60a082018190528251604084015191516001600160a01b03909116916108fc916105839190610ab5565b6040518115909202916000818181858888f193505050501580156105ab573d6000803e3d6000fd5b5081608001516001600160a01b03166108fc83604001518360a00151602001516105d59190610ab5565b6040518115909202916000818181858888f193505050501580156105fd573d6000803e3d6000fd5b506000808055600181905561061490600290610804565b505050565b60006060600054600280805461062e906108ee565b80601f016020809104026020016040519081016040528092919081815260200182805461065a906108ee565b80156106a75780601f1061067c576101008083540402835291602001916106a7565b820191906000526020600020905b81548152906001019060200180831161068a57829003601f168201915b50505050509050915091509091565b816106db5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546106eb906108ee565b90600052602060002090601f01602090048101928261070d5760008555610753565b82601f1061072657805160ff1916838001178555610753565b82800160010185558215610753579182015b82811115610753578251825591602001919060010190610738565b5061075f929150610841565b5090565b6040518060c001604052806000815260200160008152602001610799604051806040016040528060008152602001600081525090565b81526020016107bb604051806040016040528060008152602001600081525090565b81526020016107dd604051806040016040528060008152602001600081525090565b81526020016107ff604051806040016040528060008152602001600081525090565b905290565b508054610810906108ee565b6000825580601f10610820575050565b601f01602090049060005260206000209081019061083e9190610841565b50565b5b8082111561075f5760008155600101610842565b60006060828403121561086857600080fd5b50919050565b60006060828403121561088057600080fd5b61088a8383610856565b9392505050565b82815260006020604081840152835180604085015260005b818110156108c5578581018301518582016060015282016108a9565b818111156108d7576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061090257607f821691505b6020821081141561086857634e487b7160e01b600052602260045260246000fd5b80516001600160a01b038116811461093a57600080fd5b919050565b60006080828403121561095157600080fd5b6040516080810181811067ffffffffffffffff8211171561098257634e487b7160e01b600052604160045260246000fd5b60405261098e83610923565b81526020830151602082015260408301516040820152606083015160608201528091505092915050565b6001600160a01b03831681526080810161088a60208301848035825260208082013590830152604090810135910152565b600060e082840312156109fb57600080fd5b60405160e0810181811067ffffffffffffffff82111715610a2c57634e487b7160e01b600052604160045260246000fd5b604052610a3883610923565b8152602083015160208201526040830151604082015260608301516060820152610a6460808401610923565b608082015260a083015160a082015260c083015160c08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610ab057610ab0610a87565b500190565b6000816000190483118215151615610acf57610acf610a87565b50029056fea26469706673582212207dd1fb1d988bf1520c3a2ff47f267ecf2466fd3a60768e3d7a919bfa94a1b57f64736f6c634300080c0033`,
  BytecodeLen: 3660,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:60:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:70:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:90:11:after expr stmt semicolon',
    fs: [],
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
