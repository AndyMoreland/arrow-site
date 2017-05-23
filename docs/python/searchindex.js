Search.setIndex({docnames:["api","data","development","filesystems","generated/pyarrow.Array","generated/pyarrow.ArrayValue","generated/pyarrow.BinaryArray","generated/pyarrow.BinaryValue","generated/pyarrow.BooleanArray","generated/pyarrow.BooleanValue","generated/pyarrow.Buffer","generated/pyarrow.BufferOutputStream","generated/pyarrow.BufferReader","generated/pyarrow.ChunkedArray","generated/pyarrow.Column","generated/pyarrow.DataType","generated/pyarrow.Date32Array","generated/pyarrow.Date32Value","generated/pyarrow.Date64Array","generated/pyarrow.Date64Value","generated/pyarrow.DecimalArray","generated/pyarrow.DecimalType","generated/pyarrow.DecimalValue","generated/pyarrow.DictionaryArray","generated/pyarrow.DictionaryType","generated/pyarrow.DoubleValue","generated/pyarrow.Field","generated/pyarrow.FixedSizeBinaryArray","generated/pyarrow.FixedSizeBinaryType","generated/pyarrow.FixedSizeBinaryValue","generated/pyarrow.FloatValue","generated/pyarrow.FloatingPointArray","generated/pyarrow.Int16Array","generated/pyarrow.Int16Value","generated/pyarrow.Int32Array","generated/pyarrow.Int32Value","generated/pyarrow.Int64Array","generated/pyarrow.Int64Value","generated/pyarrow.Int8Array","generated/pyarrow.Int8Value","generated/pyarrow.IntegerArray","generated/pyarrow.ListArray","generated/pyarrow.ListValue","generated/pyarrow.MemoryMappedFile","generated/pyarrow.MemoryPool","generated/pyarrow.NA","generated/pyarrow.NAType","generated/pyarrow.NativeFile","generated/pyarrow.NullArray","generated/pyarrow.NumericArray","generated/pyarrow.PythonFile","generated/pyarrow.RecordBatch","generated/pyarrow.RecordBatchFileReader","generated/pyarrow.RecordBatchFileWriter","generated/pyarrow.RecordBatchStreamReader","generated/pyarrow.RecordBatchStreamWriter","generated/pyarrow.Scalar","generated/pyarrow.Schema","generated/pyarrow.StringArray","generated/pyarrow.StringValue","generated/pyarrow.Table","generated/pyarrow.Tensor","generated/pyarrow.Time32Array","generated/pyarrow.Time32Type","generated/pyarrow.Time64Array","generated/pyarrow.Time64Type","generated/pyarrow.TimestampArray","generated/pyarrow.TimestampType","generated/pyarrow.TimestampValue","generated/pyarrow.UInt16Array","generated/pyarrow.UInt16Value","generated/pyarrow.UInt32Array","generated/pyarrow.UInt32Value","generated/pyarrow.UInt64Array","generated/pyarrow.UInt64Value","generated/pyarrow.UInt8Array","generated/pyarrow.UInt8Value","generated/pyarrow.array","generated/pyarrow.binary","generated/pyarrow.bool_","generated/pyarrow.create_memory_map","generated/pyarrow.date32","generated/pyarrow.date64","generated/pyarrow.decimal","generated/pyarrow.default_memory_pool","generated/pyarrow.dictionary","generated/pyarrow.field","generated/pyarrow.float16","generated/pyarrow.float32","generated/pyarrow.float64","generated/pyarrow.from_numpy_dtype","generated/pyarrow.get_record_batch_size","generated/pyarrow.get_tensor_size","generated/pyarrow.int16","generated/pyarrow.int32","generated/pyarrow.int64","generated/pyarrow.int8","generated/pyarrow.jemalloc_memory_pool","generated/pyarrow.list_","generated/pyarrow.memory_map","generated/pyarrow.null","generated/pyarrow.open_file","generated/pyarrow.open_stream","generated/pyarrow.parquet.ParquetDataset","generated/pyarrow.parquet.ParquetFile","generated/pyarrow.parquet.read_table","generated/pyarrow.parquet.write_metadata","generated/pyarrow.parquet.write_table","generated/pyarrow.read_tensor","generated/pyarrow.schema","generated/pyarrow.set_memory_pool","generated/pyarrow.string","generated/pyarrow.struct","generated/pyarrow.time32","generated/pyarrow.time64","generated/pyarrow.timestamp","generated/pyarrow.total_allocated_bytes","generated/pyarrow.uint16","generated/pyarrow.uint32","generated/pyarrow.uint64","generated/pyarrow.uint8","generated/pyarrow.write_tensor","getting_involved","index","install","ipc","jemalloc","memory","pandas","parquet"],envversion:51,filenames:["api.rst","data.rst","development.rst","filesystems.rst","generated/pyarrow.Array.rst","generated/pyarrow.ArrayValue.rst","generated/pyarrow.BinaryArray.rst","generated/pyarrow.BinaryValue.rst","generated/pyarrow.BooleanArray.rst","generated/pyarrow.BooleanValue.rst","generated/pyarrow.Buffer.rst","generated/pyarrow.BufferOutputStream.rst","generated/pyarrow.BufferReader.rst","generated/pyarrow.ChunkedArray.rst","generated/pyarrow.Column.rst","generated/pyarrow.DataType.rst","generated/pyarrow.Date32Array.rst","generated/pyarrow.Date32Value.rst","generated/pyarrow.Date64Array.rst","generated/pyarrow.Date64Value.rst","generated/pyarrow.DecimalArray.rst","generated/pyarrow.DecimalType.rst","generated/pyarrow.DecimalValue.rst","generated/pyarrow.DictionaryArray.rst","generated/pyarrow.DictionaryType.rst","generated/pyarrow.DoubleValue.rst","generated/pyarrow.Field.rst","generated/pyarrow.FixedSizeBinaryArray.rst","generated/pyarrow.FixedSizeBinaryType.rst","generated/pyarrow.FixedSizeBinaryValue.rst","generated/pyarrow.FloatValue.rst","generated/pyarrow.FloatingPointArray.rst","generated/pyarrow.Int16Array.rst","generated/pyarrow.Int16Value.rst","generated/pyarrow.Int32Array.rst","generated/pyarrow.Int32Value.rst","generated/pyarrow.Int64Array.rst","generated/pyarrow.Int64Value.rst","generated/pyarrow.Int8Array.rst","generated/pyarrow.Int8Value.rst","generated/pyarrow.IntegerArray.rst","generated/pyarrow.ListArray.rst","generated/pyarrow.ListValue.rst","generated/pyarrow.MemoryMappedFile.rst","generated/pyarrow.MemoryPool.rst","generated/pyarrow.NA.rst","generated/pyarrow.NAType.rst","generated/pyarrow.NativeFile.rst","generated/pyarrow.NullArray.rst","generated/pyarrow.NumericArray.rst","generated/pyarrow.PythonFile.rst","generated/pyarrow.RecordBatch.rst","generated/pyarrow.RecordBatchFileReader.rst","generated/pyarrow.RecordBatchFileWriter.rst","generated/pyarrow.RecordBatchStreamReader.rst","generated/pyarrow.RecordBatchStreamWriter.rst","generated/pyarrow.Scalar.rst","generated/pyarrow.Schema.rst","generated/pyarrow.StringArray.rst","generated/pyarrow.StringValue.rst","generated/pyarrow.Table.rst","generated/pyarrow.Tensor.rst","generated/pyarrow.Time32Array.rst","generated/pyarrow.Time32Type.rst","generated/pyarrow.Time64Array.rst","generated/pyarrow.Time64Type.rst","generated/pyarrow.TimestampArray.rst","generated/pyarrow.TimestampType.rst","generated/pyarrow.TimestampValue.rst","generated/pyarrow.UInt16Array.rst","generated/pyarrow.UInt16Value.rst","generated/pyarrow.UInt32Array.rst","generated/pyarrow.UInt32Value.rst","generated/pyarrow.UInt64Array.rst","generated/pyarrow.UInt64Value.rst","generated/pyarrow.UInt8Array.rst","generated/pyarrow.UInt8Value.rst","generated/pyarrow.array.rst","generated/pyarrow.binary.rst","generated/pyarrow.bool_.rst","generated/pyarrow.create_memory_map.rst","generated/pyarrow.date32.rst","generated/pyarrow.date64.rst","generated/pyarrow.decimal.rst","generated/pyarrow.default_memory_pool.rst","generated/pyarrow.dictionary.rst","generated/pyarrow.field.rst","generated/pyarrow.float16.rst","generated/pyarrow.float32.rst","generated/pyarrow.float64.rst","generated/pyarrow.from_numpy_dtype.rst","generated/pyarrow.get_record_batch_size.rst","generated/pyarrow.get_tensor_size.rst","generated/pyarrow.int16.rst","generated/pyarrow.int32.rst","generated/pyarrow.int64.rst","generated/pyarrow.int8.rst","generated/pyarrow.jemalloc_memory_pool.rst","generated/pyarrow.list_.rst","generated/pyarrow.memory_map.rst","generated/pyarrow.null.rst","generated/pyarrow.open_file.rst","generated/pyarrow.open_stream.rst","generated/pyarrow.parquet.ParquetDataset.rst","generated/pyarrow.parquet.ParquetFile.rst","generated/pyarrow.parquet.read_table.rst","generated/pyarrow.parquet.write_metadata.rst","generated/pyarrow.parquet.write_table.rst","generated/pyarrow.read_tensor.rst","generated/pyarrow.schema.rst","generated/pyarrow.set_memory_pool.rst","generated/pyarrow.string.rst","generated/pyarrow.struct.rst","generated/pyarrow.time32.rst","generated/pyarrow.time64.rst","generated/pyarrow.timestamp.rst","generated/pyarrow.total_allocated_bytes.rst","generated/pyarrow.uint16.rst","generated/pyarrow.uint32.rst","generated/pyarrow.uint64.rst","generated/pyarrow.uint8.rst","generated/pyarrow.write_tensor.rst","getting_involved.rst","index.rst","install.rst","ipc.rst","jemalloc.rst","memory.rst","pandas.rst","parquet.rst"],objects:{"pyarrow.Array":{__init__:[4,1,1,""]},"pyarrow.ArrayValue":{__init__:[5,1,1,""]},"pyarrow.BinaryArray":{__init__:[6,1,1,""]},"pyarrow.BinaryValue":{__init__:[7,1,1,""]},"pyarrow.BooleanArray":{__init__:[8,1,1,""]},"pyarrow.BooleanValue":{__init__:[9,1,1,""]},"pyarrow.Buffer":{__init__:[10,1,1,""]},"pyarrow.BufferOutputStream":{__init__:[11,1,1,""]},"pyarrow.BufferReader":{__init__:[12,1,1,""]},"pyarrow.ChunkedArray":{__init__:[13,1,1,""]},"pyarrow.Column":{__init__:[14,1,1,""]},"pyarrow.DataType":{__init__:[15,1,1,""]},"pyarrow.Date32Array":{__init__:[16,1,1,""]},"pyarrow.Date32Value":{__init__:[17,1,1,""]},"pyarrow.Date64Array":{__init__:[18,1,1,""]},"pyarrow.Date64Value":{__init__:[19,1,1,""]},"pyarrow.DecimalArray":{__init__:[20,1,1,""]},"pyarrow.DecimalType":{__init__:[21,1,1,""]},"pyarrow.DecimalValue":{__init__:[22,1,1,""]},"pyarrow.DictionaryArray":{__init__:[23,1,1,""]},"pyarrow.DictionaryType":{__init__:[24,1,1,""]},"pyarrow.DoubleValue":{__init__:[25,1,1,""]},"pyarrow.Field":{__init__:[26,1,1,""]},"pyarrow.FixedSizeBinaryArray":{__init__:[27,1,1,""]},"pyarrow.FixedSizeBinaryType":{__init__:[28,1,1,""]},"pyarrow.FixedSizeBinaryValue":{__init__:[29,1,1,""]},"pyarrow.FloatValue":{__init__:[30,1,1,""]},"pyarrow.FloatingPointArray":{__init__:[31,1,1,""]},"pyarrow.Int16Array":{__init__:[32,1,1,""]},"pyarrow.Int16Value":{__init__:[33,1,1,""]},"pyarrow.Int32Array":{__init__:[34,1,1,""]},"pyarrow.Int32Value":{__init__:[35,1,1,""]},"pyarrow.Int64Array":{__init__:[36,1,1,""]},"pyarrow.Int64Value":{__init__:[37,1,1,""]},"pyarrow.Int8Array":{__init__:[38,1,1,""]},"pyarrow.Int8Value":{__init__:[39,1,1,""]},"pyarrow.IntegerArray":{__init__:[40,1,1,""]},"pyarrow.ListArray":{__init__:[41,1,1,""]},"pyarrow.ListValue":{__init__:[42,1,1,""]},"pyarrow.MemoryMappedFile":{__init__:[43,1,1,""]},"pyarrow.MemoryPool":{__init__:[44,1,1,""]},"pyarrow.NAType":{__init__:[46,1,1,""]},"pyarrow.NativeFile":{__init__:[47,1,1,""]},"pyarrow.NullArray":{__init__:[48,1,1,""]},"pyarrow.NumericArray":{__init__:[49,1,1,""]},"pyarrow.PythonFile":{__init__:[50,1,1,""]},"pyarrow.RecordBatch":{__init__:[51,1,1,""]},"pyarrow.RecordBatchFileReader":{__init__:[52,1,1,""]},"pyarrow.RecordBatchFileWriter":{__init__:[53,1,1,""]},"pyarrow.RecordBatchStreamReader":{__init__:[54,1,1,""]},"pyarrow.RecordBatchStreamWriter":{__init__:[55,1,1,""]},"pyarrow.Scalar":{__init__:[56,1,1,""]},"pyarrow.Schema":{__init__:[57,1,1,""]},"pyarrow.StringArray":{__init__:[58,1,1,""]},"pyarrow.StringValue":{__init__:[59,1,1,""]},"pyarrow.Table":{__init__:[60,1,1,""]},"pyarrow.Tensor":{__init__:[61,1,1,""]},"pyarrow.Time32Array":{__init__:[62,1,1,""]},"pyarrow.Time32Type":{__init__:[63,1,1,""]},"pyarrow.Time64Array":{__init__:[64,1,1,""]},"pyarrow.Time64Type":{__init__:[65,1,1,""]},"pyarrow.TimestampArray":{__init__:[66,1,1,""]},"pyarrow.TimestampType":{__init__:[67,1,1,""]},"pyarrow.TimestampValue":{__init__:[68,1,1,""]},"pyarrow.UInt16Array":{__init__:[69,1,1,""]},"pyarrow.UInt16Value":{__init__:[70,1,1,""]},"pyarrow.UInt32Array":{__init__:[71,1,1,""]},"pyarrow.UInt32Value":{__init__:[72,1,1,""]},"pyarrow.UInt64Array":{__init__:[73,1,1,""]},"pyarrow.UInt64Value":{__init__:[74,1,1,""]},"pyarrow.UInt8Array":{__init__:[75,1,1,""]},"pyarrow.UInt8Value":{__init__:[76,1,1,""]},"pyarrow.parquet":{ParquetDataset:[103,0,1,""],ParquetFile:[104,0,1,""],read_table:[105,3,1,""],write_metadata:[106,3,1,""],write_table:[107,3,1,""]},"pyarrow.parquet.ParquetDataset":{__init__:[103,1,1,""]},"pyarrow.parquet.ParquetFile":{__init__:[104,1,1,""]},pyarrow:{"null":[100,3,1,""],Array:[4,0,1,""],ArrayValue:[5,0,1,""],BinaryArray:[6,0,1,""],BinaryValue:[7,0,1,""],BooleanArray:[8,0,1,""],BooleanValue:[9,0,1,""],Buffer:[10,0,1,""],BufferOutputStream:[11,0,1,""],BufferReader:[12,0,1,""],ChunkedArray:[13,0,1,""],Column:[14,0,1,""],DataType:[15,0,1,""],Date32Array:[16,0,1,""],Date32Value:[17,0,1,""],Date64Array:[18,0,1,""],Date64Value:[19,0,1,""],DecimalArray:[20,0,1,""],DecimalType:[21,0,1,""],DecimalValue:[22,0,1,""],DictionaryArray:[23,0,1,""],DictionaryType:[24,0,1,""],DoubleValue:[25,0,1,""],Field:[26,0,1,""],FixedSizeBinaryArray:[27,0,1,""],FixedSizeBinaryType:[28,0,1,""],FixedSizeBinaryValue:[29,0,1,""],FloatValue:[30,0,1,""],FloatingPointArray:[31,0,1,""],Int16Array:[32,0,1,""],Int16Value:[33,0,1,""],Int32Array:[34,0,1,""],Int32Value:[35,0,1,""],Int64Array:[36,0,1,""],Int64Value:[37,0,1,""],Int8Array:[38,0,1,""],Int8Value:[39,0,1,""],IntegerArray:[40,0,1,""],ListArray:[41,0,1,""],ListValue:[42,0,1,""],MemoryMappedFile:[43,0,1,""],MemoryPool:[44,0,1,""],NA:[45,2,1,""],NAType:[46,0,1,""],NativeFile:[47,0,1,""],NullArray:[48,0,1,""],NumericArray:[49,0,1,""],PythonFile:[50,0,1,""],RecordBatch:[51,0,1,""],RecordBatchFileReader:[52,0,1,""],RecordBatchFileWriter:[53,0,1,""],RecordBatchStreamReader:[54,0,1,""],RecordBatchStreamWriter:[55,0,1,""],Scalar:[56,0,1,""],Schema:[57,0,1,""],StringArray:[58,0,1,""],StringValue:[59,0,1,""],Table:[60,0,1,""],Tensor:[61,0,1,""],Time32Array:[62,0,1,""],Time32Type:[63,0,1,""],Time64Array:[64,0,1,""],Time64Type:[65,0,1,""],TimestampArray:[66,0,1,""],TimestampType:[67,0,1,""],TimestampValue:[68,0,1,""],UInt16Array:[69,0,1,""],UInt16Value:[70,0,1,""],UInt32Array:[71,0,1,""],UInt32Value:[72,0,1,""],UInt64Array:[73,0,1,""],UInt64Value:[74,0,1,""],UInt8Array:[75,0,1,""],UInt8Value:[76,0,1,""],array:[77,3,1,""],binary:[78,3,1,""],bool_:[79,3,1,""],create_memory_map:[80,3,1,""],date32:[81,3,1,""],date64:[82,3,1,""],decimal:[83,3,1,""],default_memory_pool:[84,3,1,""],dictionary:[85,3,1,""],field:[86,3,1,""],float16:[87,3,1,""],float32:[88,3,1,""],float64:[89,3,1,""],from_numpy_dtype:[90,3,1,""],get_record_batch_size:[91,3,1,""],get_tensor_size:[92,3,1,""],int16:[93,3,1,""],int32:[94,3,1,""],int64:[95,3,1,""],int8:[96,3,1,""],jemalloc_memory_pool:[97,3,1,""],list_:[98,3,1,""],memory_map:[99,3,1,""],open_file:[101,3,1,""],open_stream:[102,3,1,""],read_tensor:[108,3,1,""],schema:[109,3,1,""],set_memory_pool:[110,3,1,""],string:[111,3,1,""],struct:[112,3,1,""],time32:[113,3,1,""],time64:[114,3,1,""],timestamp:[115,3,1,""],total_allocated_bytes:[116,3,1,""],uint16:[117,3,1,""],uint32:[118,3,1,""],uint64:[119,3,1,""],uint8:[120,3,1,""],write_tensor:[121,3,1,""]}},objnames:{"0":["py","class","Python class"],"1":["py","method","Python method"],"2":["py","data","Python data"],"3":["py","function","Python function"]},objtypes:{"0":"py:class","1":"py:method","2":"py:data","3":"py:function"},terms:{"0x7fce62e29670":127,"0x7fce6395c4c8":127,"0x7fce8cb28cc8":129,"0x7fce8ed5e1f0":127,"0x7fce8ed80260":127,"0x7fce8edb7ea0":127,"0x7fce8ede44c8":129,"0x7fce8f9e3c00":1,"0x7fce8f9e3e10":1,"0x7fce90480768":1,"0x7fce90483278":1,"0x7fce90491408":1,"0x7fce904914f8":1,"0x7fce904a6638":1,"0x7fce904b9138":1,"0x7fce904b9818":1,"abstract":127,"boolean":[1,86,103,129],"byte":[12,52,86,101,102,104,105,121,125,127],"case":122,"class":[1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,103,104,123,127,129],"default":[3,52,77,78,86,99,101,102,103,104,105,106,107,126,127,129],"export":[2,3,127],"final":2,"float":128,"function":[1,123,125,127,129],"import":[1,3,125,126,127,128,129],"int":[52,78,80,83,101,102,105,107,121,128],"new":[1,125,126,127],"null":[1,128,129],"return":[1,77,78,80,86,91,92,97,99,101,102,105,108,109,121,125],"true":[1,2,86,103,107,125,128,129],"while":[126,127,128,129],For:[1,104,105,123,125,127],One:128,The:[1,53,55,106,107,125,126,127,128,129],Then:2,There:127,These:[1,127,129],Use:[103,104],Using:[123,126,127],With:128,__index_level_0__:129,__init__:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,103,104],_parquet:129,abcdefghijklmnopqrstuvwxyz:127,abl:[2,127],about:2,abov:1,absolut:129,acceler:123,accept:129,access:[123,127],accompani:1,accur:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],achiev:128,acquir:127,activ:[2,122],actual:126,adapt:129,add:123,addit:[1,123,127],adopt:129,after:[2,127,129],agnost:1,algorithm:123,align:126,all:[1,2,103,125,127,128,129],alloc:[77,97,108,125,126,127],allow:126,along:123,alreadi:[126,128],also:[1,3,123,125,126,127,128,129],altern:103,although:[126,128],alwai:128,amount:127,analogu:1,analysi:129,analyt:123,ani:[2,108,125,127,129],apach:[1,2,122,127],api:[1,123,125,126,127],appear:1,applic:1,apr:2,apt:2,arbitrari:[125,128],archiv:122,argument:129,arr:1,arrai:[13,60,85,123,125,126,127,128],arrow:[1,2,12,52,53,54,55,60,101,102,122,124,125,126,127,129],arrow_build_toolchain:2,arrow_build_typ:2,arrow_hom:2,arrow_libhdfs_dir:3,artifact:124,assign:1,assist:127,assum:[103,124],atom:1,attribut:[1,4,6,8,10,13,14,16,18,20,21,23,26,27,28,31,32,34,36,38,40,41,42,48,49,51,52,54,57,58,60,61,62,63,64,65,66,67,69,71,73,75,104],audienc:122,avail:[124,127],back:[13,128,129],bar:[1,125,129],base:[3,97,126,127],basi:[107,129],batch2:1,batch:[51,52,91,123,125],baz:[1,125,129],becaus:[1,2,125],been:[125,127,129],begin:125,behav:127,being:129,below:1,best:129,better:129,between:[125,127],big:123,bin:[2,3],binari:[1,52,53,54,55,124,125],bind:[3,123,129],bit:[1,2],bool:[1,86,107,125,128,129],boost:2,bootstrap:2,both:128,brotli:[2,129],buf:[125,127],buffer:[1,12,104,105,123,125],bufferoutputstream:[125,127],bufferread:[104,105,125,127],build:129,build_ext:2,built:[127,129],bundl:129,byte_arrai:129,bytes_alloc:127,bytes_written:121,bytesio:127,call:[13,14,51,60,128],can:[1,2,3,97,105,125,126,127,128,129],cannot:99,canon:123,categor:[1,85,128],categori:1,chang:99,chat:122,cheapli:127,check:[2,103,125],child:127,children:1,choos:127,chunk:[1,13],chunkedarrai:1,circumst:127,clang:2,classpath:3,clean:127,client:3,clone:2,close:[125,129],cmake:2,code:129,codec:107,coerc:1,coercibl:86,collect:[1,2,60,109,127],column:[1,51,105,107,125,128,129],columnar:[1,123,129],com:2,come:[1,3],command:2,common:[123,129],commonli:129,commun:123,compat:[103,123],compil:2,complet:[103,125],compos:1,compress:[107,123],comput:105,concaten:[1,129],concept:127,concurr:129,conda:[123,129],conda_env:2,conda_prefix:2,config:2,configur:2,connect:3,consid:[1,127],consist:[1,103,128,129],constitut:129,construct:[109,127],constructor:[13,14,26,51,60,123],consum:128,contain:[1,3,125,128,129],content:105,contigu:1,contribut:122,conveni:125,convers:127,convert:[1,12,90,127,128],convienc:128,copi:[1,12,108,125,126,127],core:2,correspond:1,could:125,count:1,cpp:[2,129],creat:[1,2,53,77,80,86,101,102,125,127,129],created_bi:129,ctest:2,current:[2,77,108,121,124,128],custom:[123,127],cxx:2,cython:2,darrow_build_test:2,darrow_python:2,dat:127,data:[26,52,53,55,77,101,102,122,123,125,126,127,128,129],datafram:[123,129],dataset:[1,103,105,123],dataset_nam:129,datatyp:[1,77,83,85,86,90,98],date:[1,128],datetim:128,datetime64:128,dcmake_build_typ:2,dcmake_install_prefix:2,dealloc:127,decim:1,decod:129,defin:[1,125,127,129],depend:[2,129],describ:1,descriptor:127,deseri:127,design:[123,128],dest:121,destin:128,detail:[103,123,129],dev:[2,122],develop:[122,123,124,129],df_new:128,dict:[86,107],dict_arrai:1,dictionari:[107,128,129],dictionaryarrai:1,did:2,differ:[1,123,125,127],directli:[1,13,14,26,51,60],directori:[2,103,105,129],discov:129,discuss:[3,127],disk:[103,123,129],distinct:1,distribut:3,divid:103,dll:2,document:[1,123],doe:[108,125,127],doesn:126,done:128,doubl:[128,129],dparquet_build_benchmark:2,dparquet_build_execut:2,dparquet_build_test:2,dparquet_zlib_vendor:2,drill:129,driver:3,drwxrwxr:2,dtype:[1,90],due:129,dure:128,each:[1,103,107,127,129],effici:[1,127],either:[52,53,54,55,101,102,107,126,129],element:14,elsewher:103,email:122,embed:[1,52,101,102],enabl:[1,122,126,129],encapsul:103,encod:[1,85,107,123],end:[52,101,102,125,127],entir:125,entri:128,env:2,environ:3,equal:[1,14,51,60,78,125,128],equival:128,especi:129,even:122,examin:1,exampl:[1,127,129],example2:[127,129],exe:2,exist:[104,124,126],expect:127,expens:129,explain:[1,127],explicit:[3,126],explicitli:126,expos:1,extend:126,extens:129,factor:1,factori:[1,123],fall:129,fals:[1,103,125,128,129],fast:123,faster:[126,129],featur:[123,124,127,129],field:[109,112,123],file:[1,52,53,54,55,80,99,101,102,103,104,105,106,107,108,121,123],file_obj:127,filemetadata:[103,105,129],filesystem:[103,123],filesytem:127,finer:123,first:[2,125],fit:1,fix:[1,78,125,128],fixed_size_binari:1,flat:[123,128],flatbuff:2,float32:128,float64:[1,128,129],follow:[122,125,127],foo:[1,125,127,129],footer_offset:[52,101,102],forg:[2,124],format:[1,52,53,54,55,101,102,105,106,107,122,123,125],format_vers:129,found:103,free:[126,127],freed:127,fresh:2,friend:127,from:[1,2,3,12,52,77,104,105,106,108,109,123,125,127,128,129],from_:[51,60],from_arrai:[1,125],from_batch:1,from_panda:[128,129],from_pandas_seri:128,from_pylist:126,frombuff:127,full:[1,128],futur:127,garbag:127,gcc:2,gener:[107,129],get:[2,123],get_batch:125,get_result:[125,127],gil:127,git:2,github:2,given:[1,2,80],glob:3,global:126,grain:123,greater:78,group:[103,129],grow:129,guid:2,gzip:129,hadoop:[123,129],hadoop_hom:3,handl:[1,122],happi:122,has:[1,3,125,126,127,128,129],have:[1,122,125,127,129],hdf:123,hdfs3:3,hdfsclient:3,hdfsfile:127,hello:127,help:[1,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],here:[1,123,125,128],hierarch:123,high:129,higher:[2,127,129],hive:129,hold:1,home:2,host:3,hous:123,housekeep:2,how:129,http:2,idea:122,ideal:129,immut:1,impala:129,implement:[123,127,129],improv:1,includ:[1,2,91,92,127,129],increment:127,incub:129,index:1,index_column:129,index_typ:85,indic:[1,80,129],indirectli:122,individu:[103,129],infer:[77,129],inifil:2,initi:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],inplac:2,input:[1,123,125],instal:[2,3,123,129],instanc:[1,77,86,127,129],instead:[51,60],instruct:2,int32:1,int32_field:1,int64:[1,125,129],int64arrai:1,integ:1,integr:122,intend:127,interact:127,interest:127,interfac:[104,123,126,128],intern:[122,127],interoper:122,interprocess:123,interrel:1,introduc:127,invers:128,involv:123,ipc:[1,123],issu:128,item:[1,2],iter:109,its:[121,126],itself:122,jar:3,java:3,java_hom:3,jemalloc:[2,97,123],jemalloc_memory_pool:[126,127],jemalloc_pool:126,jira:122,jni:3,join:122,kei:86,kerb_ticket:3,kernel:126,kind:127,know:[2,125],known:1,kwarg:107,lab:3,languag:[1,123],larg:129,larger:[52,101,102],later:1,latest:124,layer:[123,129],layout:129,ld_library_path:3,leaf:123,learn:[122,129],len:[1,125],length:[1,51,60,78,125,127,128],let:[1,2,125,127,129],level:[60,127,129],lib:[1,2,3,127],libhdf:3,libhdfs3:3,librari:[2,3,123,127],lifetim:127,like:[1,3,52,53,54,55,77,78,101,102,124,125,126,127,129],linear:[126,128],link:3,linux:124,list:[1,103,105,107,109,122,129],list_:1,load:3,local:103,locat:[3,105],logic:1,look:129,maco:124,magnitud:126,mai:[1,3,126,127,129],mail:122,main:[123,128],major:127,make:[1,2,125,126,127],malloc:127,manag:127,mani:[127,129],manipul:123,manylinux1:124,map:[80,99,108,123,125,126,129],mark:128,mask:128,maximum:107,mean:127,memori:[13,77,80,97,99,108,123,125,126,128,129],memory_map:127,memory_pool:[77,126],memorymappedfil:[80,99,127],memorypool:[77,110,123,127],memoryview:127,messag:[1,123,127],metadata:[26,86,91,92,103,104,105,106,123,125,129],method:[4,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,52,53,54,55,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,103,104,125,127],might:128,millisecond:128,mimic:127,miniconda:2,minimum:127,miss:128,mkdir:2,mmap:[80,99,127],mode:[43,99],model:123,modern:2,month:129,more:[1,13,123,127,128,129],most:[122,128,129],much:129,multipl:[1,103,123],multithread:123,must:[1,2,3,86,125,129],my_pool:127,my_schema:1,name:[1,14,26,60,86,103,105,125,128,129],nan:[1,129],nanosecond:128,nativ:[3,123,129],nativefil:[52,53,54,55,101,102,104,105,106,107,108,121,125,127,129],need:[1,2,124,127,129],nest:[1,128,129],nested_arr:1,none:[1,52,77,86,101,102,103,104,105,107,115,125,127,128,129],normal:[1,127],note:26,noth:103,now:[2,122,125],nthread:[105,129],null_count:1,nullabl:[26,86,128],num_chunk:1,num_column:[1,125,129],num_record_batch:125,num_row:[1,125,129],num_row_group:129,number:[1,105,107,121,125,129],numpi:[1,2,90,129],numpy_typ:129,obj:12,object:[1,12,52,53,54,55,77,80,101,102,104,105,108,121,125,126,127,128,129],obtain:[2,103,123],occupi:1,off:2,offset:[52,101,102],often:[1,3,127],old:126,omit:2,one:[1,2,13,51,60,129],ones:1,onli:[1,105,106,107,123,124,125,126,127,128],open:[80,99,125,127,129],open_fil:125,open_stream:125,oper:[108,125,126,127],option:[1,2,3,26,77,78,127,128,129],org:122,orient:1,origin:[125,129],osfil:127,other:[1,3,122,123,125,126,127,128,129],otherwis:124,our:[2,122],out:[1,125,127,129],output:123,over:126,own:127,packag:2,pad:[91,92],page:[123,126,129],panda:[1,2,123,129],pandas_typ:129,pandas_vers:129,parallel:[105,129],paramet:[12,52,53,54,55,77,78,80,86,99,101,102,103,104,105,106,107,108,109,121,128],parent:127,parq:129,parquet:[2,123,127,128],parquet_build_toolchain:2,parquet_fil:129,parquet_hom:2,parquetdataset:129,parquetfil:129,parquetfilemetadata:104,parquetschema:129,parquetwrit:129,part:[1,124],particular:[1,125,127,129],particularli:[1,129],partit:[103,123],pass:[1,2,77,97,103,104,105,125,126,127,129],path:[2,52,53,54,55,80,99,101,102,103,129],path_or_path:103,payload:125,peopl:122,per:[1,107,129],perform:[1,129],permit:127,pf2:129,physic:1,piec:[1,103],pip:[123,129],pivot:3,place:2,plain:129,plan:122,platform:2,plu:1,pluggi:2,point:125,pointer:127,pool:[77,110,123,126],popd:2,port:3,posit:[108,121],posix:126,possibl:[103,127,128],practic:129,precis:[83,127],prefer:127,present:129,preserv:127,previou:126,primari:[122,127],primit:1,print:[1,127],process:125,produc:[127,129],project:[122,129],protocol:127,provid:[123,126,127,128,129],pull:124,pushd:2,put:2,pyarrow:[1,2,3,123,125,126],pybyt:78,pypi:124,pytest:2,python35:2,python:[1,12,52,53,54,55,77,101,102,104,105,124,125,127,129],pythonfil:127,pythonfileinterfac:[104,105],pythonpath:2,random:[123,127],rang:[125,127,129],rapidjson:2,rather:[1,3,104],read:[52,103,104,105,108,122,123],read_buff:127,read_row_group:129,read_tabl:129,readabl:[52,54,101,102,104],reader:[12,54,101,102,104,125,127],realloc:126,receiv:1,recent:124,recommend:2,record:[52,123,125],recordbatch:[1,91,125],recordbatchfileread:[101,125],recordbatchfilewrit:125,recordbatchstreamread:[102,125],recordbatchstreamwrit:125,refer:[123,127],referenc:[1,127],region:126,regular:127,relationship:127,releas:2,relev:1,reli:3,repo:2,repositori:2,repres:[26,128],represent:123,request:[126,127],requir:[1,105,125,127],resolut:128,respect:129,result:[2,129],retriev:124,right:122,rle:129,root:3,rootdir:2,routin:128,row:[51,103,107,129],row_group_s:107,rowgroup:107,runtim:3,safe:127,same:[1,2,103,125,128],save:1,scalar:[1,123],scale:83,schema:[53,55,103,106,123,125,129],sdk:3,second:2,section:[1,3,125,127],see:[1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,104,105,123,124,129],seek:[125,127],select:1,self:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],semant:127,send:[122,125],sent:125,separ:105,sequenc:[1,77,125],seri:[1,123],serial:[91,92,123,127],serialized_s:129,session:2,set:[2,3,77,123,126,128,129],set_memory_pool:[97,126],setuptool:2,sever:127,share:[1,122,123,129],should:[2,107,129],side:128,signatur:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76],significantli:129,similar:[1,2,127,128],similarli:129,simpl:[1,129],simpli:[2,85,126],sinc:[3,125],singl:[1,103,104,105,107,123,126],sink:[53,55,125],site:2,six:2,size:[1,78,80,91,92,99,125,126,127],skip:2,slack:122,slice:[1,127],slightli:1,small:[1,125],smaller:129,snappi:[2,107,129],socket:[1,125],some:[1,2,3,52,101,102,107,125,127,128,129],somewher:3,sourc:[2,52,53,54,55,97,101,102,103,104,105,106,107,108,123,125,128,129],spark:129,special:1,specif:[1,122],specifi:[107,126,129],speed:129,split_row_group:103,sssssssssssssss:2,standard:[127,129],start:[2,123,125],still:[126,128],storag:[1,129],str:[52,53,54,55,101,102,103,104,105,107,128],strategi:126,stream:[1,54,55,102,123,127],streamwrit:125,string:[1,80,86,99,105,106,107,125,127,128,129],stringarrai:1,struct:1,structur:[1,123,128,129],studio:2,subdirectori:103,subpool:127,subscrib:122,subset:129,sudo:2,suffici:2,suppli:128,support:[1,43,108,123,124,125,126,127,128],sure:125,symlink:2,system:[122,123,126,127,128,129],tabl:[105,107,123,126,128,129],table2:129,tag:124,target:2,tcmalloc:126,tensor:[92,108,121,123],test_arrai:2,test_convert_builtin:2,test_convert_panda:2,test_feath:2,test_hdf:2,test_io:2,test_ipc:2,test_jemalloc:2,test_parquet:2,test_scalar:2,test_schema:2,test_tabl:2,test_tensor:2,than:[1,3,78,104,127,128,129],thee:1,thei:[1,127,129],them:[1,128,129],thi:[1,2,3,13,14,26,51,52,60,101,102,108,123,124,125,126,127,128,129],thirdparti:[2,3],those:129,though:1,thought:1,threadsaf:105,three:129,thrift:2,through:[1,122,126],throughput:129,thu:[125,126,128,129],ticket_cache_path:3,time:[1,3,128],timestamp:[1,128],timestamps_to_m:128,to_panda:[1,128,129],to_pybyt:127,todo:1,toggl:129,too:129,tool:[1,127],toolchain:2,top:60,total:[2,91,92,121],total_allocated_byt:127,touch:126,track:127,transmit:1,transport:129,tricki:2,two:[125,127,129],type:[2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,46,47,48,49,50,51,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,85,86,123,125,127],ubuntu:2,uncompress:129,underli:105,unicod:[128,129],union:1,unit:128,unit_str:[113,114,115],unmodifi:128,usag:123,use:[1,3,26,51,60,107,122,125,126,127,129],use_dictionari:[107,129],used:[1,125,127,128,129],useful:125,user:[1,2,3],uses:[3,126,127,129],using:[1,2,3,124,127,128,129],utf8:[111,129],valid:103,validate_schema:103,valu:[1,86,123,128],value_typ:98,variabl:[1,2,3,78],variou:[1,128],vector:[14,128],veri:[52,101,102,125],version:[2,106,107,124,129],via:13,view:127,visual:2,wai:[1,127,129],well:129,wesm:2,when:[1,125,127,129],where:[1,106,107,127,129],whether:129,which:[1,97,125,127,129],whole:129,width:78,win64:2,window:123,within:129,without:[1,127],work:[2,128],worst:129,wrangl:1,wrap:127,write:[106,107,121,123],write_batch:125,write_t:129,writeabl:[53,55,80,125],writer:[53,55,125,127,129],written:[53,55,121,129],xcode:2,year:129,yield:129,you:[1,2,3,122,124,126,127,128,129],your:[2,3,122,127],zero:[12,108,125,127],zip:2,zlib:2},titles:["API Reference","In-Memory Data Model","Development","Filesystem Interfaces","pyarrow.Array","pyarrow.ArrayValue","pyarrow.BinaryArray","pyarrow.BinaryValue","pyarrow.BooleanArray","pyarrow.BooleanValue","pyarrow.Buffer","pyarrow.BufferOutputStream","pyarrow.BufferReader","pyarrow.ChunkedArray","pyarrow.Column","pyarrow.DataType","pyarrow.Date32Array","pyarrow.Date32Value","pyarrow.Date64Array","pyarrow.Date64Value","pyarrow.DecimalArray","pyarrow.DecimalType","pyarrow.DecimalValue","pyarrow.DictionaryArray","pyarrow.DictionaryType","pyarrow.DoubleValue","pyarrow.Field","pyarrow.FixedSizeBinaryArray","pyarrow.FixedSizeBinaryType","pyarrow.FixedSizeBinaryValue","pyarrow.FloatValue","pyarrow.FloatingPointArray","pyarrow.Int16Array","pyarrow.Int16Value","pyarrow.Int32Array","pyarrow.Int32Value","pyarrow.Int64Array","pyarrow.Int64Value","pyarrow.Int8Array","pyarrow.Int8Value","pyarrow.IntegerArray","pyarrow.ListArray","pyarrow.ListValue","pyarrow.MemoryMappedFile","pyarrow.MemoryPool","pyarrow.NA","pyarrow.NAType","pyarrow.NativeFile","pyarrow.NullArray","pyarrow.NumericArray","pyarrow.PythonFile","pyarrow.RecordBatch","pyarrow.RecordBatchFileReader","pyarrow.RecordBatchFileWriter","pyarrow.RecordBatchStreamReader","pyarrow.RecordBatchStreamWriter","pyarrow.Scalar","pyarrow.Schema","pyarrow.StringArray","pyarrow.StringValue","pyarrow.Table","pyarrow.Tensor","pyarrow.Time32Array","pyarrow.Time32Type","pyarrow.Time64Array","pyarrow.Time64Type","pyarrow.TimestampArray","pyarrow.TimestampType","pyarrow.TimestampValue","pyarrow.UInt16Array","pyarrow.UInt16Value","pyarrow.UInt32Array","pyarrow.UInt32Value","pyarrow.UInt64Array","pyarrow.UInt64Value","pyarrow.UInt8Array","pyarrow.UInt8Value","pyarrow.array","pyarrow.binary","pyarrow.bool_","pyarrow.create_memory_map","pyarrow.date32","pyarrow.date64","pyarrow.decimal","pyarrow.default_memory_pool","pyarrow.dictionary","pyarrow.field","pyarrow.float16","pyarrow.float32","pyarrow.float64","pyarrow.from_numpy_dtype","pyarrow.get_record_batch_size","pyarrow.get_tensor_size","pyarrow.int16","pyarrow.int32","pyarrow.int64","pyarrow.int8","pyarrow.jemalloc_memory_pool","pyarrow.list_","pyarrow.memory_map","pyarrow.null","pyarrow.open_file","pyarrow.open_stream","pyarrow.parquet.ParquetDataset","pyarrow.parquet.ParquetFile","pyarrow.parquet.read_table","pyarrow.parquet.write_metadata","pyarrow.parquet.write_table","pyarrow.read_tensor","pyarrow.schema","pyarrow.set_memory_pool","pyarrow.string","pyarrow.struct","pyarrow.time32","pyarrow.time64","pyarrow.timestamp","pyarrow.total_allocated_bytes","pyarrow.uint16","pyarrow.uint32","pyarrow.uint64","pyarrow.uint8","pyarrow.write_tensor","Getting Involved","Apache Arrow (Python)","Install PyArrow","IPC: Fast Streaming and Serialization","jemalloc MemoryPool","Memory and IO Interfaces","Using PyArrow with pandas","Reading and Writing the Apache Parquet Format"],titleterms:{"class":0,"function":0,"null":100,Using:128,access:125,apach:[0,123,129],api:0,arrai:[0,1,4,77],arrayvalu:5,arrow:[123,128],batch:[0,1],binari:78,binaryarrai:6,binaryvalu:7,bool_:79,booleanarrai:8,booleanvalu:9,buffer:[10,127],bufferoutputstream:11,bufferread:12,build:2,chunkedarrai:13,column:14,commun:0,compat:129,compress:129,conda:[2,124],constructor:0,convers:128,create_memory_map:80,custom:1,data:1,datafram:128,dataset:129,datatyp:15,date32:81,date32arrai:16,date32valu:17,date64:82,date64arrai:18,date64valu:19,decim:83,decimalarrai:20,decimaltyp:21,decimalvalu:22,default_memory_pool:84,develop:2,dictionari:[1,85],dictionaryarrai:23,dictionarytyp:24,differ:128,disk:127,doublevalu:25,encod:129,environ:2,factori:0,fast:125,field:[1,26,86],file:[3,125,127,129],filesystem:[3,127],finer:129,fixedsizebinaryarrai:27,fixedsizebinarytyp:28,fixedsizebinaryvalu:29,float16:87,float32:88,float64:89,floatingpointarrai:31,floatvalu:30,format:129,from:124,from_numpy_dtyp:90,get:122,get_record_batch_s:91,get_tensor_s:92,grain:129,hadoop:[3,127],hdf:3,input:0,instal:124,int16:93,int16arrai:32,int16valu:33,int32:94,int32arrai:34,int32valu:35,int64:95,int64arrai:36,int64valu:37,int8:96,int8arrai:38,int8valu:39,integerarrai:40,interfac:[3,127],interprocess:0,involv:122,ipc:125,jemalloc:126,jemalloc_memory_pool:97,linux:2,list_:98,listarrai:41,listvalu:42,maco:2,map:127,memori:[0,1,127],memory_map:99,memorymappedfil:43,memorypool:[44,126],messag:0,metadata:1,model:1,multipl:129,multithread:129,nativ:127,nativefil:47,natyp:46,nullarrai:48,numericarrai:49,obtain:129,open_fil:101,open_stream:102,output:0,panda:128,parquet:[0,103,104,105,106,107,129],parquetdataset:103,parquetfil:104,partit:129,pip:124,pool:[0,127],pyarrow:[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,124,127,128,129],python:[2,123],pythonfil:50,random:125,read:[125,127,129],read_tabl:105,read_tensor:108,record:[0,1],recordbatch:51,recordbatchfileread:52,recordbatchfilewrit:53,recordbatchstreamread:54,recordbatchstreamwrit:55,refer:0,requir:2,run:2,scalar:[0,56],schema:[0,1,57,109],seri:128,serial:125,set_memory_pool:110,setup:2,share:0,singl:129,sourc:124,stream:125,string:111,stringarrai:58,stringvalu:59,struct:112,support:129,system:[2,3],tabl:[0,1,60],tensor:[0,61],test:2,time32:113,time32arrai:62,time32typ:63,time64:114,time64arrai:64,time64typ:65,timestamp:115,timestamparrai:66,timestamptyp:67,timestampvalu:68,total_allocated_byt:116,type:[0,1,128],uint16:117,uint16arrai:69,uint16valu:70,uint32:118,uint32arrai:71,uint32valu:72,uint64:119,uint64arrai:73,uint64valu:74,uint8:120,uint8arrai:75,uint8valu:76,unit:2,valu:0,window:2,write:[125,127,129],write_metadata:106,write_t:107,write_tensor:121}})