// Automatically generated with Reach 0.1.11 (1c3f08fe)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (1c3f08fe)';
export const _backendVersion = 17;

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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1, ctc1],
      2: [ctc0, ctc1, ctc1, ctc0, ctc1],
      3: [ctc0, ctc1, ctc1, ctc0, ctc1, ctc1]
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const v106 = stdlib.protect(ctc0, interact.wager, 'for Alice\'s interact field wager');
  
  const v109 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:23:50:application',
    fs: ['at ./index.rsh:21:12:application call to [unknown function] (defined at: ./index.rsh:21:16:function exp)'],
    msg: 'getGuess',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v109, v106],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:25:8:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc0],
    pay: [v106, []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v111, v112], secs: v114, time: v113, didSend: v31, from: v110 } = txn1;
      
      sim_r.txns.push({
        amt: v112,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v111, v112], secs: v114, time: v113, didSend: v31, from: v110 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v42, from: v120 } = txn2;
  ;
  const v128 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:36:50:application',
    fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)'],
    msg: 'getHand',
    who: 'Alice'
    });
  
  const txn3 = await (ctc.sendrecv({
    args: [v110, v111, v112, v120, v121, v128],
    evt_cnt: 1,
    funcNum: 2,
    lct: v122,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:38:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v130], secs: v132, time: v131, didSend: v52, from: v129 } = txn3;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v52, from: v129 } = txn3;
  ;
  const v133 = stdlib.addressEq(v110, v129);
  stdlib.assert(v133, {
    at: './index.rsh:38:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const txn4 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 3,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v138], secs: v140, time: v139, didSend: v62, from: v137 } = txn4;
  ;
  const v141 = stdlib.addressEq(v120, v137);
  stdlib.assert(v141, {
    at: './index.rsh:43:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  const v142 = stdlib.eq(v111, v121);
  const v143 = stdlib.add(v130, v138);
  const v144 = stdlib.eq(v111, v143);
  const v146 = stdlib.eq(v121, v143);
  const v147 = v146 ? stdlib.checkedBigNumberify('./index.rsh:47:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:48:55:decimal', stdlib.UInt_max, '0');
  const v148 = v144 ? stdlib.checkedBigNumberify('./index.rsh:46:57:decimal', stdlib.UInt_max, '1') : v147;
  const v149 = v142 ? stdlib.checkedBigNumberify('./index.rsh:45:44:decimal', stdlib.UInt_max, '0') : v148;
  const v150 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:50:41:decimal', stdlib.UInt_max, '1'));
  const v151 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:51:20:decimal', stdlib.UInt_max, '2'));
  const v152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v153 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v154 = v151 ? v152 : v153;
  const v155 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v156 = v150 ? v155 : v154;
  const v157 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '0')];
  const v158 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '1')];
  const v159 = stdlib.mul(v157, v112);
  ;
  const v164 = stdlib.mul(v158, v112);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v149), {
    at: './index.rsh:59:23:application',
    fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)'],
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
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v111, v112], secs: v114, time: v113, didSend: v31, from: v110 } = txn1;
  ;
  const v119 = stdlib.protect(ctc0, await interact.getGuess(), {
    at: './index.rsh:29:48:application',
    fs: ['at ./index.rsh:28:10:application call to [unknown function] (defined at: ./index.rsh:28:14:function exp)'],
    msg: 'getGuess',
    who: 'Bob'
    });
  stdlib.protect(ctc1, await interact.acceptWager(v112), {
    at: './index.rsh:30:23:application',
    fs: ['at ./index.rsh:28:10:application call to [unknown function] (defined at: ./index.rsh:28:14:function exp)'],
    msg: 'acceptWager',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v110, v111, v112, v119],
    evt_cnt: 1,
    funcNum: 1,
    lct: v113,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [v112, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v121], secs: v123, time: v122, didSend: v42, from: v120 } = txn2;
      
      sim_r.txns.push({
        amt: v112,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v121], secs: v123, time: v122, didSend: v42, from: v120 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v130], secs: v132, time: v131, didSend: v52, from: v129 } = txn3;
  ;
  const v133 = stdlib.addressEq(v110, v129);
  stdlib.assert(v133, {
    at: './index.rsh:38:9:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v136 = stdlib.protect(ctc0, await interact.getHand(), {
    at: './index.rsh:41:48:application',
    fs: ['at ./index.rsh:40:11:application call to [unknown function] (defined at: ./index.rsh:40:15:function exp)'],
    msg: 'getHand',
    who: 'Bob'
    });
  
  const txn4 = await (ctc.sendrecv({
    args: [v110, v111, v112, v120, v121, v130, v136],
    evt_cnt: 1,
    funcNum: 3,
    lct: v131,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:43:7:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn4) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v138], secs: v140, time: v139, didSend: v62, from: v137 } = txn4;
      
      ;
      const v142 = stdlib.eq(v111, v121);
      const v143 = stdlib.add(v130, v138);
      const v144 = stdlib.eq(v111, v143);
      const v146 = stdlib.eq(v121, v143);
      const v147 = v146 ? stdlib.checkedBigNumberify('./index.rsh:47:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:48:55:decimal', stdlib.UInt_max, '0');
      const v148 = v144 ? stdlib.checkedBigNumberify('./index.rsh:46:57:decimal', stdlib.UInt_max, '1') : v147;
      const v149 = v142 ? stdlib.checkedBigNumberify('./index.rsh:45:44:decimal', stdlib.UInt_max, '0') : v148;
      const v150 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:50:41:decimal', stdlib.UInt_max, '1'));
      const v151 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:51:20:decimal', stdlib.UInt_max, '2'));
      const v152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
      const v153 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
      const v154 = v151 ? v152 : v153;
      const v155 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
      const v156 = v150 ? v155 : v154;
      const v157 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '0')];
      const v158 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '1')];
      const v159 = stdlib.mul(v157, v112);
      sim_r.txns.push({
        kind: 'from',
        to: v110,
        tok: undefined /* Nothing */
        });
      const v164 = stdlib.mul(v158, v112);
      sim_r.txns.push({
        kind: 'from',
        to: v120,
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
    tys: [ctc2, ctc0, ctc0, ctc2, ctc0, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v138], secs: v140, time: v139, didSend: v62, from: v137 } = txn4;
  ;
  const v141 = stdlib.addressEq(v120, v137);
  stdlib.assert(v141, {
    at: './index.rsh:43:7:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  const v142 = stdlib.eq(v111, v121);
  const v143 = stdlib.add(v130, v138);
  const v144 = stdlib.eq(v111, v143);
  const v146 = stdlib.eq(v121, v143);
  const v147 = v146 ? stdlib.checkedBigNumberify('./index.rsh:47:55:decimal', stdlib.UInt_max, '2') : stdlib.checkedBigNumberify('./index.rsh:48:55:decimal', stdlib.UInt_max, '0');
  const v148 = v144 ? stdlib.checkedBigNumberify('./index.rsh:46:57:decimal', stdlib.UInt_max, '1') : v147;
  const v149 = v142 ? stdlib.checkedBigNumberify('./index.rsh:45:44:decimal', stdlib.UInt_max, '0') : v148;
  const v150 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:50:41:decimal', stdlib.UInt_max, '1'));
  const v151 = stdlib.eq(v149, stdlib.checkedBigNumberify('./index.rsh:51:20:decimal', stdlib.UInt_max, '2'));
  const v152 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2')];
  const v153 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '1')];
  const v154 = v151 ? v152 : v153;
  const v155 = [stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '2'), stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '0')];
  const v156 = v150 ? v155 : v154;
  const v157 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '0')];
  const v158 = v156[stdlib.checkedBigNumberify('./index.rsh:50:9:array', stdlib.UInt_max, '1')];
  const v159 = stdlib.mul(v157, v112);
  ;
  const v164 = stdlib.mul(v158, v112);
  ;
  stdlib.protect(ctc1, await interact.seeOutcome(v149), {
    at: './index.rsh:59:23:application',
    fs: ['at ./index.rsh:58:7:application call to [unknown function] (defined at: ./index.rsh:58:25:function exp)'],
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
  appApproval: `BiAIAAECAwggKFAmAgEAACI1ADEYQQKJKWRJIls1ASEEWzUCNhoAF0lBAAciNQQjNQYANhoCFzUENhoDNhoBF0kkDEABUEklDEAA2iUSRCU0ARJENARJIhJMNAISEUQoZEk1A0lKIQVbNf8hBls1/lcwIDX9IQdbNfxJNQUXNfuABNQMbNY0+xZQsDT9MQASRDQDgVhbNPsINfoiJDT8NPoSTSM0/zT6Ek0iNP80/BJNNfmAEAAAAAAAAAABAAAAAAAAAAGAEAAAAAAAAAAAAAAAAAAAAAI0+SQSTYAQAAAAAAAAAAIAAAAAAAAAADT5IxJNNfixIrIBNPgiWzT+C7III7IQNANXACCyB7OxIrIBNPghBFs0/guyCCOyEDT9sgezQgErSCQ0ARJENARJIhJMNAISEUQoZEk1A0lKSVcAIDX/IQVbNf4hBls1/VcwIDX8IQdbNftJNQUXNfqABJdO9xc0+hZQsDT/MQASRDT/NP4WUDT9FlA0/FA0+xZQNPoWUChLAVcAYGdIJTUBMgY1AkIA10kjDEAAYEgjNAESRDQESSISTDQCEhFEKGRJNQNJSVcAIDX/IQVbNf4hBls1/Uk1BRc1/IAE1RUZFDT8FlCwNP2IAOU0/zT+FlA0/RZQMQBQNPwWUChLAVcAWGdIJDUBMgY1AkIAcUiBoI0GiAC6IjQBEkQ0BEkiEkw0AhIRREk1BUkiWzX/IQRbNf6ABKzRH8M0/xZQNP4WULA0/ogAiTEANP8WUDT+FlAoSwFXADBnSCM1ATIGNQJCABwxGYEFEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEJDE1EkQiMTYSRCIxNxJEIjUBIjUCQv+vNABJSiMINQA4BzIKEkQ4ECMSRDgIEkSJ`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 96,
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v112",
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
                "name": "v111",
                "type": "uint256"
              },
              {
                "internalType": "uint256",
                "name": "v112",
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
                "name": "v121",
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
                "name": "v130",
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
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
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
                "name": "v121",
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
                "name": "v130",
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
                "name": "v138",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200100238038062001002833981016040819052620000269162000237565b6000805543600355604080513381528251602080830191909152808401518051838501520151606082015290517fa736757a943474ef5983bb0422ab3a1e64bcd39e99635f4430c7765118231f959181900360800190a1602080820151015162000094903414600762000130565b620000c2604051806060016040528060006001600160a01b0316815260200160008152602001600081525090565b33808252602083810180515182850190815290518201516040808601918252600160008190554390558051808501959095529151848301525160608085019190915281518085039091018152608090930190528151620001279260029201906200015a565b505050620002d4565b81620001565760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b828054620001689062000297565b90600052602060002090601f0160209004810192826200018c5760008555620001d7565b82601f10620001a757805160ff1916838001178555620001d7565b82800160010185558215620001d7579182015b82811115620001d7578251825591602001919060010190620001ba565b50620001e5929150620001e9565b5090565b5b80821115620001e55760008155600101620001ea565b604080519081016001600160401b03811182821017156200023157634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200024b57600080fd5b6200025562000200565b835181526040601f19830112156200026c57600080fd5b6200027662000200565b60208581015182526040909501518582015293810193909352509092915050565b600181811c90821680620002ac57607f821691505b60208210811415620002ce57634e487b7160e01b600052602260045260246000fd5b50919050565b610d1e80620002e46000396000f3fe6080604052600436106100565760003560e01c80631e93b0f11461005f57806345f70396146100835780638323075714610096578063873779a1146100ab578063ab53f2c6146100be578063f4cedab0146100e157005b3661005d57005b005b34801561006b57600080fd5b506003545b6040519081526020015b60405180910390f35b61005d610091366004610a16565b6100f4565b3480156100a257600080fd5b50600154610070565b61005d6100b9366004610a16565b610326565b3480156100ca57600080fd5b506100d3610507565b60405161007a929190610a39565b61005d6100ef366004610a16565b6105a4565b610104600260005414600d61085e565b61011e8135158061011757506001548235145b600e61085e565b60008080556002805461013090610a96565b80601f016020809104026020016040519081016040528092919081815260200182805461015c90610a96565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610ae7565b90507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b833836040516101f4929190610b71565b60405180910390a16102083415600b61085e565b8051610220906001600160a01b03163314600c61085e565b61026b6040518060c0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b0316815260200160008152602001600081525090565b81516001600160a01b0390811680835260208085015181850190815260408087015181870190815260608089015187168189019081526080808b0151818b019081528c88013560a0808d019182526003600055436001558751998a019a909a529651958801959095529251918601919091525190951694830194909452925191810191909152905160c082015260e0015b60405160208183030381529060405260029080519060200190610320929190610887565b50505050565b610336600160005414600961085e565b6103508135158061034957506001548235145b600a61085e565b60008080556002805461036290610a96565b80601f016020809104026020016040519081016040528092919081815260200182805461038e90610a96565b80156103db5780601f106103b0576101008083540402835291602001916103db565b820191906000526020600020905b8154815290600101906020018083116103be57829003601f168201915b50505050508060200190518101906103f39190610b98565b90507f3957da95a08a7316b724c4fe20ec058158ff5f626860362a6b6aafcb999f72253383604051610426929190610b71565b60405180910390a161043f81604001513414600861085e565b6104836040518060a0016040528060006001600160a01b03168152602001600081526020016000815260200160006001600160a01b03168152602001600081525090565b81516001600160a01b031681526020808301518183015260408084015181840152336060840152848201356080840152600260005543600155516102fc9183910181516001600160a01b0390811682526020808401519083015260408084015190830152606080840151909116908201526080918201519181019190915260a00190565b60006060600054600280805461051c90610a96565b80601f016020809104026020016040519081016040528092919081815260200182805461054890610a96565b80156105955780601f1061056a57610100808354040283529160200191610595565b820191906000526020600020905b81548152906001019060200180831161057857829003601f168201915b50505050509050915091509091565b6105b4600360005414601161085e565b6105ce813515806105c757506001548235145b601261085e565b6000808055600280546105e090610a96565b80601f016020809104026020016040519081016040528092919081815260200182805461060c90610a96565b80156106595780601f1061062e57610100808354040283529160200191610659565b820191906000526020600020905b81548152906001019060200180831161063c57829003601f168201915b50505050508060200190518101906106719190610c07565b905061067b61090b565b7f96fec920882ac36be2ad80273a3572d38922662f78edb2ef77dc6748d3fd2cc133846040516106ac929190610b71565b60405180910390a16106c03415600f61085e565b60608201516106db906001600160a01b03163314601061085e565b60a08201516106ef90602085013590610cb1565b8152608082015160208301511461072d57805160208301511461072657805160808301511461071f576000610730565b6002610730565b6001610730565b60005b602080830191825260408301805160009081905290516002908301819052606085018051600190819052905184018190526080860180519290925290519092015290511461079857600281602001511461078e57806060015161079e565b806040015161079e565b80608001515b60a082018190528251604084015191516001600160a01b03909116916108fc916107c89190610cc9565b6040518115909202916000818181858888f193505050501580156107f0573d6000803e3d6000fd5b5081606001516001600160a01b03166108fc83604001518360a001516020015161081a9190610cc9565b6040518115909202916000818181858888f19350505050158015610842573d6000803e3d6000fd5b5060008080556001819055610859906002906109ac565b505050565b816108835760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805461089390610a96565b90600052602060002090601f0160209004810192826108b557600085556108fb565b82601f106108ce57805160ff19168380011785556108fb565b828001600101855582156108fb579182015b828111156108fb5782518255916020019190600101906108e0565b506109079291506109e9565b5090565b6040518060c001604052806000815260200160008152602001610941604051806040016040528060008152602001600081525090565b8152602001610963604051806040016040528060008152602001600081525090565b8152602001610985604051806040016040528060008152602001600081525090565b81526020016109a7604051806040016040528060008152602001600081525090565b905290565b5080546109b890610a96565b6000825580601f106109c8575050565b601f0160209004906000526020600020908101906109e691906109e9565b50565b5b8082111561090757600081556001016109ea565b600060408284031215610a1057600080fd5b50919050565b600060408284031215610a2857600080fd5b610a3283836109fe565b9392505050565b82815260006020604081840152835180604085015260005b81811015610a6d57858101830151858201606001528201610a51565b81811115610a7f576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c90821680610aaa57607f821691505b60208210811415610a1057634e487b7160e01b600052602260045260246000fd5b80516001600160a01b0381168114610ae257600080fd5b919050565b600060a08284031215610af957600080fd5b60405160a0810181811067ffffffffffffffff82111715610b2a57634e487b7160e01b600052604160045260246000fd5b604052610b3683610acb565b81526020830151602082015260408301516040820152610b5860608401610acb565b6060820152608083015160808201528091505092915050565b6001600160a01b038316815260608101610a32602083018480358252602090810135910152565b600060608284031215610baa57600080fd5b6040516060810181811067ffffffffffffffff82111715610bdb57634e487b7160e01b600052604160045260246000fd5b604052610be783610acb565b815260208301516020820152604083015160408201528091505092915050565b600060c08284031215610c1957600080fd5b60405160c0810181811067ffffffffffffffff82111715610c4a57634e487b7160e01b600052604160045260246000fd5b604052610c5683610acb565b81526020830151602082015260408301516040820152610c7860608401610acb565b60608201526080830151608082015260a083015160a08201528091505092915050565b634e487b7160e01b600052601160045260246000fd5b60008219821115610cc457610cc4610c9b565b500190565b6000816000190483118215151615610ce357610ce3610c9b565b50029056fea2646970667358221220c4929815757bea8ad4423c6f08b6162277921609b2ae00dd1f68e956eaafa3c364736f6c634300080c0033`,
  BytecodeLen: 4098,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:26:10:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:33:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:39:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:56:11:after expr stmt semicolon',
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
