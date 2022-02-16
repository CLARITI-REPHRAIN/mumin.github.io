---
layout: page
title: Getting Started
---

If you are looking to use the MuMiN dataset in your research or work, this page
is here to get you started.


## Installation of the `mumin` package

The dataset is built using our Python package, `mumin`. To install this, write
the following in your terminal:

```shell
$ pip install mumin
```

If you want to be able to add embeddings of the tweets and images, you need to
add on the `[embeddings]` extras:

```shell
$ pip install mumin[embeddings]
```

Further, if you're interested in exporting to the Deep Graph Library, then add
on the `[dgl]` extras:

```shell
$ pip install mumin[dgl]
```

You can add on _all_ extras using the `[all]` extras:

```shell
$ pip install mumin[all]
```


## Compiling and using the MuMiN dataset

With the `mumin` package installed, you compile the dataset in a Python script
containing the following:

```python
>>> from mumin import MuminDataset
>>> dataset = MuminDataset(bearer_token, size='small')
>>> dataset.compile()
MuminDataset(num_nodes=XXXXX, num_relations=XXXXX, size='small', compiled=True)
```

With a compiled dataset, you can now work directly with the individual nodes
and relations using the `dataset.nodes` and `dataset.rels` dictionaries. For
instance, you can get a dataframe with all the claims as follows:

```python
>>> claim_df = dataset.nodes['claim']
>>> claim_df.head()
TODO
```

All the relations are dataframes with two columns, `src` and `tgt`,
corresponding to the source and target of the relation. For instance, if we're
interested in the relation `(:Tweet)-[:DISCUSSES]->(:Claim)` then we can
extract this as follows:
```python
>>> discusses_df = dataset.rels[('tweet', 'discusses', 'claim')]
>>> discusses_df.head()
TODO
```

## Using embeddings and exporting to `dgl`

If you are interested in computing transformer embeddings of the tweets and
images then run the following:

```python
>>> dataset.add_embeddings()
MuminDataset(num_nodes=XXXXX, num_relations=XXXXX, size='small', compiled=True)
```

From a compiled dataset, with or without embeddings, you can export the dataset
to a Deep Graph Library heterogeneous graph object, which allows you to use
graph machine learning algorithms on the dataset. To export it, you simple run:

```python
>>> dgl_graph = dataset.to_dgl()
>>> type(dgl_graph)
dgl.heterograph.DGLHeteroGraph
```


## Tutorials

For more in-depth examples and tutorials, check out our notebooks in the
[MuMiN-examples repository](todo)!
