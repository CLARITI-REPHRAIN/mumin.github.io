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
MuminDataset(num_nodes=388,149, num_relations=475,490, size='small', compiled=True)
```

To be able to compile the dataset, data from Twitter needs to be downloaded, 
which requires a Twitter API key. You can get one 
[for free here](https://developer.twitter.com/en/portal/dashboard). You 
will need the Bearer Token (bearer_token).

Note that this dataset does not contain _all_ the nodes and relations in
MuMiN-small, as that would take way longer to compile. The data left out are
timelines, profile pictures and article images. These can be included by
specifying `include_extra_images=True` and/or `include_timelines=True` in the
constructor of `MuminDataset`.

With a compiled dataset, you can now work directly with the individual nodes
and relations using the `dataset.nodes` and `dataset.rels` dictionaries. For
instance, you can get a dataframe with all the claims as follows:

```python
>>> claim_df = dataset.nodes['claim']
>>> claim_df.head()
Index(['embedding', 'label', 'reviewers', 'date', 'language', 'keywords',
       'cluster_keywords', 'cluster', 'train_mask', 'val_mask', 'test_mask'],
      dtype='object')
```

All the relations are dataframes with two columns, `src` and `tgt`,
corresponding to the source and target of the relation. For instance, if we're
interested in the relation `(:Tweet)-[:DISCUSSES]->(:Claim)` then we can
extract this as follows:
```python
>>> discusses_df = dataset.rels[('tweet', 'discusses', 'claim')]
>>> discusses_df.head()
   src  tgt
0    0    0
1    1    1
2    2    1
3    3    1
4    4    1
```

## Using embeddings and exporting to `dgl`

If you are interested in computing transformer embeddings of the tweets and
images then run the following:

```python
>>> dataset.add_embeddings()
MuminDataset(num_nodes=388,149, num_relations=475,490, size='small', compiled=True)
```

From a compiled dataset, with or without embeddings, you can export the dataset
to a Deep Graph Library heterogeneous graph object, which allows you to use
graph machine learning algorithms on the dataset. To export it, you simple run:

```python
>>> dgl_graph = dataset.to_dgl()
>>> type(dgl_graph)
dgl.heterograph.DGLHeteroGraph
```


## Tutorial

We have created a tutorial which takes you through the dataset as well as
shows how one could create several kinds of misinformation classifiers on the
dataset. The tutorial can be found here:

[https://colab.research.google.com/drive/1Kz0EQtySYQTo1ui8F2KZ6ERneZVf5TIN](https://colab.research.google.com/drive/1Kz0EQtySYQTo1ui8F2KZ6ERneZVf5TIN)
