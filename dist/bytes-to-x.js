var i={Bits:{val:.125,unit:"b"},Gibibits:{val:134217728,unit:"Gibit"},Gibibytes:{val:1073741824,unit:"Gib"},Gigabits:{val:125e6,unit:"Gb"},Gigabytes:{val:1e9,unit:"GB"},Kibibits:{val:128,unit:"Kibit"},Kibibytes:{val:1024,unit:"KiB"},Kilobits:{val:125,unit:"kb"},Kilobytes:{val:1e3,unit:"kB"},Mebibits:{val:131072,unit:"Mibit"},Megabits:{val:125e3,unit:"Mb"},Megabytes:{val:1e6,unit:"MB"},Petabits:{val:125e12,unit:"Pb"},Petabytes:{val:1e15,unit:"PB"},Terabits:{val:125e9,unit:"Tb"},Terabytes:{val:1e12,unit:"TB"}},t={};Object.keys(i).forEach(function(b){var e=i[b],a=e.val,n=e.unit;t["to"+b]=function(i,t){void 0===i&&(i=0),void 0===t&&(t=3),"string"==typeof i&&(i=Number(i));var b=i/a;return"function"==typeof t?t(b,n):b.toFixed(t)+" "+n}}),module.exports=t;
//# sourceMappingURL=bytes-to-x.js.map
